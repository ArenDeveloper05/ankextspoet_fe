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
import { Button, TextField } from "@mui/material";

// video
// import video from "../../assets/video/video3.mp4";
import video from "../../assets/video/video2.mp4";
// import video from "../../assets/video/video1.mp4";

// =================================================

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
      <video src={video} controls muted autoPlay loop></video>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form className="login-container">
              <div className="login-container-row">
                <TextField
                  label="Ձեր էլ փոստը"
                  fullWidth={true}
                  type="text"
                  error={props.errors.username}
                  placeholder="example@mail.ru"
                  name="username"
                  value={props.values.username}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  sx={{ width: "95%" }}
                />
                {props.errors.username && props.touched.username && (
                  <p>{props.errors.username}</p>
                )}
              </div>
              <div className="login-container-row">
                <div className="login-container-row-password">
                  <TextField
                    label="Ձեր գաղտնաբառը"
                    fullWidth={true}
                    error={props.errors.password}
                    type={visiblePassword ? "text" : "password"}
                    placeholder="Example1234"
                    name="password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    sx={{ width: "95%" }}
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
              <Button type="submit">ՄՈՒՏՔ</Button>
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
