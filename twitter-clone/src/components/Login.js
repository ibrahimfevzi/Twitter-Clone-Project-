import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    axios
      .post("https://wit-courses-api2.onrender.com/login", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("s11g2_0223", res.data.token);
          history("/entry-list");
        }
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>LOGIN FORM</h1>
      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
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
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <input type="submit" />
    </form>
  );
}
