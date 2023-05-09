import React from "react";
import { useForm } from "react-hook-form";

import "../App.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>LOGİN-FORM</h1>
      <label>Email</label>
      <input
        type="email"
        {...register(
          "email",

          { pattern: /^[A-Za-z]+$/i }
        )}
      />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Password</label>

      <input type="password" {...register("password")} />

      <input type="submit" />
    </form>
  );
}
