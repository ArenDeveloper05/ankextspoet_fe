import { useState } from "react";
import "./Login.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { ROUTER } from "../../router";
import { Link, useNavigate } from "react-router-dom";
import { changeInLocalStorage, getUserData, login } from "../../api/api";
// Formik components and Yup
import { Formik, Form } from "formik";
import * as Yup from "yup";

// //Toast components
import { ToastContainer } from "react-toastify";
import { notifyError } from "../../utils/toast/toast";

const Login = () => {
  // NAVIGATION FUNCTION
  const navigate = useNavigate();

  //STATE OF VISIBILITY PASSWORD
  const [visiblePassword, setVisiblePassword] = useState(false);

  //INITIAL VALUES OF FORM
  const initialValues = {
    username: "",
    password: "",
  };

  //VALIDATION OF FORM
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("էլ փոստը ճիշտ ֆորմատով չէ")
      .required("էլ փոստը պարտադիր է"),
    password: Yup.string().required("Գաղտնաբառը պարտադիր է"),
  });

  //FUNCTION WICH CALLS WHEN USER CLICKS SUBMIT BUTTON
  async function handleSubmit(values) {
    console.log(values);
    try {
      const {
        data: { access_token },
      } = await login(values);
      changeInLocalStorage("accessToken", access_token);
      const { data } = await getUserData(access_token);
      changeInLocalStorage("isAuth", "true");
      changeInLocalStorage("userData", JSON.stringify(data));
      navigate(ROUTER.HOME_ROUTE);
      window.location.reload();
      console.log(data);
    } catch (error) {
      console.log(error.message);
      notifyError(error.response.data.message);
    }
  }

  return (
    <div className="login">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form className="login-container">
              <div className="login-container-row">
                <label htmlFor="login-email">Ձեր էլ փոստը</label>
                <input
                  type="text"
                  id="login-email"
                  placeholder="example@mail.ru"
                  name="username"
                  value={props.values.username}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.username && props.touched.username && (
                  <p>{props.errors.username}</p>
                )}
              </div>
              <div className="login-container-row">
                <label htmlFor="login-password">Ձեր գաղտնաբառը</label>
                <div className="login-container-row-password">
                  <input
                    type={visiblePassword ? "text" : "password"}
                    placeholder="Example1234"
                    name="password"
                    id="login-password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />

                  <span onClick={() => setVisiblePassword((prev) => !prev)}>
                    {visiblePassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
                {props.errors.password && props.touched.password && (
                  <p>{props.errors.password}</p>
                )}
              </div>
              <button type="submit">ՄՈՒՏՔ</button>
              <Link to={ROUTER.REGISTER_ROUTE}>
                Դեռ չեք գրանցվե՞լ, Գրանցվել
              </Link>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Login;
