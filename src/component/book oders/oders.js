import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Oders = () => {
  const [getservice, setservice] = useState("");
  const history = useHistory();
  return (
    <div>
      <div className="container-fluid bg-secondary py-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                Book Oders
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <li
                  className="btn btn-outline-primary"
                  onClick={() => history.push("/")}
                >
                  Home
                </li>
                <i className="fas fa-angle-double-right text-primary mx-2" />
                <a className="btn btn-outline-primary disabled" href="">
                  Book Oders
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Start */}
      <div className="container-fluid appointment py-10 d-flex">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <Formik
              initialValues={{
                name: "",
                email: "",
                datetime: "",
                msg: "",
                service: "",
              }}
              onSubmit={async (values) => {
                values.service = getservice;
                axios
                  .post("http://localhost:3000/order/add", values)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <div className="col-lg-6">
                <div
                  className="appointment-form p-5 "
                  style={{
                    backgroundColor: " #B19F6F",
                    padding: "50px 20px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Form className="row gy-3 gx-4 ">
                    <label htmlFor="name">Name</label>
                    <Field
                      id="name"
                      className="form-control py-3 border-grey text-black"
                      name="name"
                      style={{ borderRadius: "2px" }}
                    />

                    <div className="col-12" style={{ padding: "0px" }}>
                      <select
                        className="form-select py-3 border-grey"
                        style={{ backgroundColor: "#fff" }}
                        aria-label="Default select example"
                        onChange={(e) => setservice(e.target.value)}
                      >
                        <option selected="">Select Service</option>
                        <option value={"Living Room Design Interior"}>
                          Living room Design Interior
                        </option>
                        <option value="Kitchen Design Interior">
                          Kitchen Design Interior
                        </option>
                        <option value="Bedroom Design Interior">
                          Bedroom Design Interior
                        </option>

                        <option value="2d/3d Design Interior">
                          2d/3d Design Interior
                        </option>
                        <option value="Bathroom Design Interior">
                          Bathroom Design Interior
                        </option>
                        <option value="Stairs Design Interior">
                          Stairs Design Interior
                        </option>
                        <option value="Glass House Design Interior">
                          Glass House Design Interior
                        </option>
                        <option value=" Sketching Design Interior">
                          Sketching Design Interior
                        </option>
                        <option value=" Lighting Design Interior">
                          Lighting Design Interior
                        </option>
                        <option value="Basing Area Design Interior">
                          Basing Area Design Interior
                        </option>
                        <option value="Dressing Area Design Interior">
                          Dressing Area Design Interior
                        </option>
                        <option value="Full Home Interior">
                          Full Home Interior
                        </option>
                        <option value="Luxury Home Interior">
                          Luxury Home Interior
                        </option>
                        <option value="Morden Home Interior">
                          Morden Home Interior
                        </option>
                      </select>
                    </div>

                    <label htmlFor="email">Email</label>
                    <Field
                      style={{ borderRadius: "2px" }}
                      className="form-control py-3 border-grey text-black"
                      id="email"
                      name="email"
                      type="email"
                    />
                    <label className="col-lg-6" htmlFor="datetime">
                      Date and Time
                    </label>
                    <Field
                      style={{ borderRadius: "2px" }}
                      id="datetime"
                      name="datetime"
                      type="datetime-local"
                      className="form-control py-3 border-grey"
                    />

                    <label htmlFor="msg">Message</label>
                    <Field
                      id="msg"
                      style={{ borderRadius: "2px" }}
                      name="msg"
                      className="form-control py-3 border-grey text-black"
                      as="textarea"
                      rows={3}
                    />

                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Submit Now
                    </button>
                  </Form>
                  {/* <form style={{ backgroundColor: " #B19F6F", padding: "60px 30px", borderRadius: "10px 10px" }}>
                                    <div className="row gy-3 gx-4">
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control py-3 border-white text-black"
                                                style={{ backgroundColor: "#fff" }}
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control py-3 border-white text-black"
                                                style={{ backgroundColor: "#fff" }}
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <input
                                                type="date"
                                                className="form-control py-3 border-white"
                                                style={{ backgroundColor: "#fff" }}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="time"
                                                className="form-control py-3 border-white"
                                                style={{ backgroundColor: "#fff" }}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <select
                                                className="form-select py-3 border-white"
                                                style={{ backgroundColor: "#fff", width: "490px", marginBottom: "25px" }}
                                                aria-label="Default select example"
                                            >
                                                <option selected="">Select Service</option>
                                                <option value={1}>Living room Design</option>
                                                <option value={2}>Kitchen Design</option>
                                                <option value={3}>Bedroom Design</option>
                                                <option value={4}>2d/3d Design</option>
                                                <option value={5}>Bathroom Design</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea
                                                className="form-control border-white  text-black"
                                                style={{ backgroundColor: "#fff" }}
                                                name="text"
                                                id="area-text"
                                                cols={30}
                                                rows={5}
                                                placeholder="Write Massage"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="button"
                                                className="btn w-100 py-3 px-5"
                                                style={{ backgroundColor: "rgba(142, 97, 19, 0.5);", color: "white" }}
                                            >
                                                SUBMIT NOW
                                            </button>
                                        </div>
                                    </div>
                                </form>  */}
                </div>
              </div>
            </Formik>
            {/* map start */}
            <div className="col-lg-6">
              <div className="appointment-time p-2">
                <div className="d-flex justify-content-between fs-5 text-white">
                  <iframe
                    src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.280716660798!2d72.78034677503476!3d21.14122398053639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0520ce96159bf%3A0x8bcaeee5a79492d1!2sThe%20Grand%20Plaza!5e0!3m2!1sen!2sin!4v1709977006569!5m2!1sen!2sin"
                    width={540}
                    height={639}
                    style={{ border: 0, borderRadius: 10 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* map end */}
          </div>
        </div>
      </div>
      {/* Appointment End */}
    </div>
  );
};
