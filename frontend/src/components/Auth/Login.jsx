
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { loginValidation } from "./schemas/loginValidation";
import { useFormik } from "formik";
import { Alert } from "@chakra-ui/react";

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
          if(res===200){
            setTimeout(() => {
              navigate("/");
            }, 1000);
          }else{
            setState(true)
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
    <>{state==true ? (
      <Alert status={"error"}>
        <p className="w-full text-center">User doesn't Exists</p>
      </Alert>
    ) : (
      ""
    )}
     
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen justify-center items-center flex lg:h-screen">
        <form
          className="form-group border border-1 rounded-xl flex flex-col gap-2 p-3 w-3/4 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center font-bold text-3xl">PostGram</h3>

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control py-3  "
            placeholder="Enter Email..."
          />   {errors.email && touched.email ? <p className="text-yellow-200 text-[14px]">{errors.email}</p> : null}
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            className="form-control py-3"
            placeholder="Enter Password..."
          />   {errors.password && touched.password ? <p className="text-yellow-200 text-[14px]">{errors.password}</p> : null}
          <Link>
            <p className="text-right ">forget password ?</p>
          </Link>

          <button type="submit" className="bg-blue-600 w-100 my-2 py-2 text-white text-[22px] rounded-xl hover:bg-orange-700">
            Login
          </button>
          <p className="text-center text-[15px]">
            <Link to="/register">Don't have an Account?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
