"use server"

import { FieldValues } from "react-hook-form";
import { signIn } from "../auth";


export const loginAction = async (data:FieldValues) => {
  try {
    console.log(data)
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  } catch (error) {
    console.log(error);
  }
};



