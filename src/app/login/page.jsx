"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";


import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      callbackURL: "/",
    });
    if (data) {
      toast.success(`Welcome, ${name}! Login Successful.`);
    } else if (error) {
      toast.error(error.message || "Login  failed. Please try again.");
    }
  };

  const handelGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex  justify-center items-center h-screen">
      <Form
        className="flex w-96 flex-col gap-4 border p-5 shadow rounded-2xl"
        onSubmit={onSubmit}
      >
        <h1 className="font-bold text-2xl text-center">Login Now</h1>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="font-bold">Email</Label>
          <Input placeholder="Your Email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            return null;
          }}
        >
          <Label className="font-bold">Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters <br />
            <Link href="/register">
              <span className="underline font-bold">
                Register Now
              </span>
            </Link>
          </Description>
          <FieldError />
        </TextField>
        <div className="flex flex-col gap-2">
          <Button
            className="w-full bg-black text-white font-bold"
            type="submit"
          >
            <Check />
            Submit
          </Button>
        </div>
        <Button
          onClick={handelGoogle}
          variant="outline"
          className="w-full  font-bold"
        >
          <FcGoogle className="text-blue-500" />
          Google Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
