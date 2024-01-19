import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useContext } from "react";
import { loginValidation } from "./schemas/loginValidation";
import { useFormik } from "formik";
import { Alert } from "@chakra-ui/react";
import { AuthContext } from "../components/AuthContext";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginValidation,
      onSubmit: async (values) => {
        try {
          await login(values.email, values.password).then((res) => {
            if (res === 200) {
              setTimeout(() => {
                navigate("/");
              }, 1000);
            } else {
              setState(true);
              setTimeout(() => {
                setState(false);
              }, 1800);
            }
          });
        } catch (err) {
          console.log(err);
        }
      },
    });

  return (
    <>
      {state == true ? (
        <Alert status={"error"}>
          <p className="w-full text-center">User doesn't Exists</p>
        </Alert>
      ) : (
        ""
      )}

      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  justify-center items-center flex min-h-screen">
        <form
          className="form-group rounded-xl flex flex-col gap-2 p-3 w-full text-[16px] sm:text-[18px] sm:w-96 sm:border"
          onSubmit={handleSubmit}
        >
          <p className="text-center font-bold text-white text-[1.8em]">
            PostGram
          </p>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control py-2  "
            placeholder="Enter Email..."
          />
          {errors.email && touched.email ? (
            <p className="text-yellow-200 text-[1em]">{errors.email}</p>
          ) : null}
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            className="form-control py-2"
            placeholder="Enter Password..."
          />
          {errors.password && touched.password ? (
            <p className="text-yellow-200 text-[1em]">{errors.password}</p>
          ) : null}
          <Link>
            <p className="text-right text-white text-[1em]">
              forget password ?
            </p>
          </Link>
          <button
            type="submit"
            className="bg-blue-600 w-100 my-2 py-2 text-white text-[1.2em] rounded-xl hover:bg-orange-700"
          >
            Login
          </button>
          <p className="text-center text-white text-[1rem]">
            <Link to="/register">Don't have an Account?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
