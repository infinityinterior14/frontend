import React from 'react'
import { GiRotaryPhone } from 'react-icons/gi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { TfiEmail } from 'react-icons/tfi'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Formik, Field, Form } from 'formik';
import axios from 'axios'

export const Contact = () => {
  const history = useHistory()
  return (
    <div>
      <>
        <div className="container-fluid bg-secondary py-5">
          <div className="container py-5">
            <div className="row align-items-center py-4">
              <div className="col-md-6 text-center text-md-left">
                <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                  Contact Us
                </h1>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="d-inline-flex align-items-center">
                  <li className="btn btn-outline-primary" onClick={() => history.push("/")}>
                    Home
                  </li>
                  <i className="fas fa-angle-double-right text-primary mx-2" />
                  <a className="btn btn-outline-primary disabled" href="">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header Start */}
        {/* Contact Start */}
        <div className="container-fluid bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                  <div className="d-inline-flex border border-secondary p-4 mb-4">
                    <center><HiOutlineBuildingOffice2 className="flaticon-office font-weight-normal text-primary m-0 mr-3" style={{ width: "50px", height: "50px" }} /></center>
                    <div className="d-flex flex-column">
                      <h4>Our Office</h4>
                      <p className="m-0 text-white">The Grand Plaza, Vesu, Surat</p>
                    </div>
                  </div>
                  <div className="d-inline-flex border border-secondary p-4 mb-4">
                    <center><TfiEmail className="flaticon-office font-weight-normal text-primary m-0 mr-3" style={{ width: "50px", height: "50px" }} /> </center>
                    <div className="d-flex flex-column">
                      <h4>Email Us</h4>
                      <p className="m-0 text-white">Infinity@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-inline-flex border border-secondary p-4">
                    <center><GiRotaryPhone className="flaticon-office font-weight-normal text-primary m-0 mr-3" style={{ width: "50px", height: "50px" }} /></center>
                    <div className="d-flex flex-column">
                      <h4>Call Us</h4>
                      <p className="m-0 text-white"> +91 932-465-955</p>
                    </div>
                  </div>
                </div>
              </div>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  subject: '',
                  msg: ''
                }}
                onSubmit={async (values) => {
                  console.log(values);
                  axios
                    .post("http://localhost:3000/contact/add", values)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <div className="col-lg-7 mb-5 my-lg-5 py-5 pl-lg-5">
                  <div className="contact-form">
                    <div id="success" />
                    <div className="control-group">
                      <Form className="contact-form">
                        <label htmlFor="name"> Name</label>
                        <Field id="name" className="form-control p-4" name="name" />

                        <label htmlFor="email">Email</label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className="form-control p-4"
                        />
                        <label htmlFor="subject">Subject</label>
                        <Field id="subject" className="form-control p-4" name="subject" />


                        <label htmlFor="message">Message</label>
                        <Field
                          id="msg"
                          className="form-control p-4"
                          name="msg"
                          as="textarea"
                          rows={3}
                        />

                        <button
                          className="btn btn-primary py-3 px-5"
                          type="submit"
                          id="sendMessageButton"
                        >
                          Send Message
                        </button>


                      </Form>
                    </div>
                  </div>
                </div>

              </Formik>

            </div>
          </div>
        </div>
        {/* Contact End */}
      </>

    </div>
  )
}


