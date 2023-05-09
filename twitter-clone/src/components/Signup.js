import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "../App.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    window.location.href = "/login"; // Sayfayı doğrudan yönlendiriyoruz
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Email</label>
      <input type="email" {...register("email", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Password</label>
      <input type="password" {...register("password")} />
      <input type="submit" value="KAYIT OL" />
      <Link to="/login">Go to Login</Link>{" "}
      {/* Yönlendirme için Link bileşenini kullanıyoruz */}
    </form>
  );
}
