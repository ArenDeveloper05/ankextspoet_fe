import { useState } from "react";
import "./Register.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// Formik components and Yup
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "../../router";
import { register } from "../../api/api";

// //Toast components
import { ToastContainer } from "react-toastify";
import { notifyError } from "../../utils/toast/toast";

const Register = () => {
  // NAVIGATION FUNCTION
  const navigate = useNavigate();

  //STATE OF VISIBILITY PASSWORD
  const [visiblePassword, setVisiblePassword] = useState(false);

  //INITIAL VALUES OF FORM
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  //VALIDATION OF FORM
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("էլ փոստը ճիշտ ֆորմատով չէ")
      .required("էլ փոստը պարտադիր է"),
    password: Yup.string().min(8).required("Գաղտնաբառը պարտադիր է"),
    name: Yup.string().min(3).required("Անունը պարտադիր է"),
  });

  //FUNCTION WICH CALLS WHEN USER CLICKS SUBMIT BUTTON
  async function handleSubmit(values) {
    console.log(values);
    try {
      const data = await register(values);
      console.log("Registration");
      navigate(ROUTER.LOGIN_ROUTE);
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
    }
  }

  return (
    <div className="register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form className="register-container">
              <div className="register-container-row">
                <label htmlFor="username">Անուն</label>
                <input
                  type="text"
                  id="username"
                  name="name"
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.name && props.touched.name && (
                  <p>{props.errors.name}</p>
                )}
              </div>
              <div className="register-container-row">
                <label htmlFor="reg-email">էլ․ հասցե</label>
                <input
                  type="email"
                  id="reg-email"
                  name="email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.email && props.touched.email && (
                  <p>{props.errors.email}</p>
                )}
              </div>
              <div className="register-container-row">
                <label htmlFor="reg-password">Ձեր գաղտնաբառը</label>
                <div className="register-container-row-password">
                  <input
                    type={visiblePassword ? "text" : "password"}
                    placeholder="Example1234"
                    name="password"
                    id="reg-password"
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
              <button type="submit">Գրանցվել</button>
              <Link to={ROUTER.LOGIN_ROUTE}>Արդեն գրանցվե՞լ եք, ՄՈՒՏՔ</Link>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Register;
