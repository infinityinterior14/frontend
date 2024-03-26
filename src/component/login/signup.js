import React from 'react'
import { Field, Form, Formik } from "formik";
import './login.css';

export const Signup = () => {
    return (
        <div>
            <div className="container">
                <div className="loginform">
                    <Formik>
                        <Form >
                            <div className='formsignup'>
                                <label type=" Username">User Name</label>
                                <Field
                                    id="username"
                                    className="inputstyle"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className='formsignup'>
                                <label type="email">Email</label>
                                <Field
                                    id="email"
                                    className="inputstyle"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className='formsignup'>
                                <label type="password">Password</label>
                                <Field
                                    id="password"
                                    className="inputstyle"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="btn-center">
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}


