import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { myAxios } from "./Auth";

import "../App.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    myAxios()
      .post("https://wit-courses-api2.onrender.com/signup", data)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          localStorage.setItem("s11g2_0223", res.data.token);
          history("/login");
        }
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        {...register("name", {
          required: "This field is required",
          maxLength: {
            value: 20,
            message: "First name cannot exceed 20 characters",
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Alphabetical characters only",
          },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: "This field is required" })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <input type="submit" value="KAYIT OL" />
      <Link to="/login">Go to Login</Link>
    </form>
  );
}
