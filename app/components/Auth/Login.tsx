"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
  refetch:any;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Login: FC<Props> = ({ setRoute,setOpen,refetch }) => {
  const [show, setShow] = useState(false);

  const [login,{isSuccess,error}] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
     await login({email, password});
    },
  });

  useEffect(() => {
    if(isSuccess) {
      toast.success("Login successful");
      setOpen(false);
      refetch();
    }
    if(error){
      if("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  },[isSuccess,error]);


  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with <span className="title-text-gradient"> LearnInO</span></h1>
      <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="password">
            Enter your Password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer text-[16px] text-gray-400"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer  text-[16px] text-gray-400"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value="Login" className={`${styles.button}`} />
        </div>
        <br />
        {/* <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or Login with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle className="cursor-pointer mr-2" size={30} 
          onClick={() => signIn("google")}
          />
          <AiFillGithub
            className="cursor-pointer mr-2 dark:fill-white fill-black"
            size={30} onClick={() => signIn("github")}
          />
        </div> */}
        <h5 className="text-center font-Poppins text-[14px] text-black dark:text-white">
            Not have any account ?{" "}
            <span
              className="text-[#2190ff] pl-1 cursor-pointer "
              onClick={() => setRoute("Sign-Up")}
            >
              Sign Up
            </span>
          </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;
