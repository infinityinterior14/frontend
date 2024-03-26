import React from "react";
import "./login.css";
import { BsPersonCircle } from "react-icons/bs";
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Login = () => {
  return (
    <div className="login-form">
      <div className="main" style={{ backgroundColor: "  #B19F6F" }}>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
            }}
            onSubmit={async (values) => {
              axios
                .post("http://localhost:3000/signup/signup", values)
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Form className="form-signup">
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <Field
                className="drashti"
                type="text"
                name="username"
                placeholder="username"
                required=""
              />
              <Field
                className="drashti"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <Field
                className="drashti"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <div className="btn-center">
                <button type="submit">sign up</button>
              </div>
            </Form>
          </Formik>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            axios
              .post("http://localhost:3000/signup/login", values)
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <div className="login">
            <Form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <Field
                className="drashti"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <Field
                className="drashti"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <div className="btn-center">
                <button type="submit">Log in</button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
};
