"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { SignInSchema } from "@/lib/validation";

const Page = () => (
  <AuthForm
    type="sign-in"
    schema={SignInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={()=>{}}
  />
);

export default Page;