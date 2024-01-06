import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { registerValidation } from "./schemas/registerValidation";
import { useFormik } from "formik";
import { Alert, Spinner } from "@chakra-ui/react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function Register() {
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState(false);

  const navigate = useNavigate();
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerValidation,
      onSubmit: async (values) => {
       
        try {
          setState(true);
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("email", values.email);
          formData.append("password", values.password);
          formData.append("photo", photo);

          await axios
            .post("/api/v1/auth/register", formData)
            .then(() => {
              setSuccess(true);
              setTimeout(() => {
                setSuccess(false);
                navigate("/login");
              }, 3000);
            })
            .catch((err) => {
              setError(true);
              setState(false);
              setTimeout(() => {
                setError(false);
              }, 1500);
            });
        } catch (error) {
          console.log(error.message);
        }
      },
    });

  return (
    <>
      {error === true ? (
        <Alert status={"warning"}>
          <p className="w-full text-center">User Already Registered</p>
        </Alert>
      ) : (
        ""
      )}
      {success === true ? (
        <Alert status={"success"}>
          <p className="w-full text-center">User Registered Successfully</p>
        </Alert>
      ) : (
        ""
      )}

      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen justify-center items-center flex lg:h-screen">
        <form
          className="form-group border border-1 rounded-xl flex flex-col gap-2 p-3 w-3/4 xl:w-1/3 "
          onSubmit={handleSubmit}
        >
          <h3 className="text-center py-2 font-bold text-3xl">PostGram</h3>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control py-3  "
            placeholder="Enter name..."
          />
          {errors.name && touched.name ? (
            <p className="text-yellow-200 text-[14px]">{errors.name}</p>
          ) : null}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control py-3 "
            placeholder="Enter Email..."
          />
          {errors.email && touched.email ? (
            <p className="text-yellow-200 text-[14px]">{errors.email}</p>
          ) : null}
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            className="form-control py-3 "
            placeholder="Enter Password..."
          />
          {errors.password && touched.password ? (
            <p className="text-yellow-200 text-[14px]">{errors.password}</p>
          ) : null}
          <input
            type="password"
            value={values.cpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            name="cpassword"
            className="form-control py-3 "
            placeholder="Enter Confirm-Password..."
          />

          {errors.cpassword && touched.cpassword ? (
            <p className="text-yellow-200 text-[14px]">{errors.cpassword}</p>
          ) : null}
          <input
            type="file"
            name="photo"
            onChange={handlePhoto}
            className="pl-5 form-control py-3 "
          />
          <button className="bg-blue-600 w-100 my-2 py-2 text-white text-[22px] rounded-xl hover:bg-orange-700">
            {state===true ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            ) : (
              <p>Register</p>
            )}
          </button>
          <p className="text-center">
            <Link to="/login">Already have an Account?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
