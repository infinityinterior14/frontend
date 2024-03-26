
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export const Single = () => {
  const history = useHistory()
  const [image, setImage] = useState(null);

  return (
    <div>
      <>
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary py-5">
          <div className="container py-5">
            <div className="row align-items-center py-4">
              <div className="col-md-6 text-center text-md-left">
                <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                  Blog Detail
                </h1>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="d-inline-flex align-items-center">
                  <li className="btn btn-outline-primary" onClick={() => history.push("/")}>
                    Home
                  </li>
                  <i className="fas fa-angle-double-right text-primary mx-2" />
                  <a className="btn btn-outline-primary disabled" href="">
                    Blog Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header Start */}
        {/* Detail Start */}
        <div className="container py-5">
          <div className="row pt-5">
            <div className="col-lg-8">
              <div className="d-flex flex-column text-left mb-4">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                  Blog Detail Page
                </h6>
                <h1 className="mb-4 section-title">
                  Be a part of the home interiors revolution
                </h1>
              </div>
              <div className="mb-5">
                <img
                  className="img-fluid w-100 mb-4"
                  src="img/carousel-1.jpg"
                  alt="Image"
                />
                <p>
                  ‘I was also very happy with the way the furniture came together in
                  the living room,’ said Hong. ‘The custom size handmade rug from Cold
                  Picnic was a high-risk purchase because we couldn't see the colors
                  in person beforehand – but both the Tsays and I agree it was
                  absolutely worth the risk. And the original natural fiber art over
                  the sofa by Mimi Jung, one of my favorite Korean artists, is the
                  icing on the cake that makes the room.’{" "}
                </p>
                <p>
                  The continuation of the neutral scheme with a taupe sectional sofa
                  from Design Within Reach is given warmth and depth by the addition
                  of dusty blushes, sage greens, muted corals, and creamy off-whites.
                  ‘The walnut Herman Miller chair was custom upholstered in a light
                  blush-colored fabric and paired perfectly with the art above the
                  sofa,’ said Hong.{" "}
                </p>
                <h2 className="mb-4">Get a feel of our product</h2>
                <img
                  className="img-fluid w-50 float-left mr-4 mb-3"
                  src="img/Bedroom.jpg"
                  alt="Image"
                />
                <p>
                  The Tsay’s home has two bedrooms, one of which has been converted
                  into a gym and home office. The master bedroom, however, is just as
                  much about indulgence as it is function. ‘We painted a deep moody
                  green accent wall in the master bedroom and purchased a green
                  upholstered bed in a similar tone to create a monochromatic haven
                  for them to relax,’ explained Hong of the bedroom ideas. The Lulu
                  &amp; Georgia bed in a dark shade of moss green is paired with
                  forest tones in the Alpine Trail wall paint by Behr. For a touch of
                  pizzazz, the wall is decorated with brass sconces by Cedar &amp;
                  Moss.
                </p>
              </div>

              <Formik
                initialValues={{
                  img: '',
                  name: '',
                  city: '',
                  desc: ''
                }}
                onSubmit={async (values) => {
                  const formdata = new FormData();
                  formdata.append("img", image);
                  formdata.append("name", values.name);
                  formdata.append("city", values.city);
                  formdata.append("desc", values.desc);
                  // console.log(values);
                  axios
                    .post("http://localhost:3000/testimonial/add", formdata)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >


                <div className="bg-light p-5">
                  <h3 className="mb-4 section-title">Leave a comment</h3>

                  <Form className="form-group1">

                    <div className="d-flex flex-column  h-100 overflow-hidden" >
                      <label htmlFor="image">Image</label>
                      <input
                        type="file"
                        id="formFile"
                        name="img"
                        className="h-100"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>

                    <label htmlFor="name">Name</label>
                    <Field id="name"
                      className="form-control"
                      name="name" />


                    <label htmlFor="city">City</label>
                    <Field
                      className="form-control"
                      id="city"
                      name="city"
                      type="city"
                    />
                    <label htmlFor="desc">Message</label>
                    <Field id="desc"
                      name="desc"
                      className="form-control"
                      as="textarea"
                      rows={4}
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
              </Formik>
            </div>


            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="d-flex flex-column text-center bg-secondary mb-5 py-5 px-4">
                <img
                  src="img/partner.png"
                  className="img-fluid mx-auto mb-3"
                  style={{ width: 100 }}
                />
                <h3 className="text-primary mb-3">John Doe</h3>
                <p className="text-white m-0">
                  This was the first time we had used Fusion Design service and were
                  so happy with the advice that we asked John to return for a second
                  session
                </p>
              </div>
              <div className="mb-5">
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Keyword"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text bg-transparent text-primary">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mb-5">
                <h3 className="mb-4 section-title">Categories</h3>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Modern House
                    <span className="badge badge-primary badge-pill">150</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Contemporary
                    <span className="badge badge-primary badge-pill">131</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Art Deco
                    <span className="badge badge-primary badge-pill">78</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Industrial
                    <span className="badge badge-primary badge-pill">56</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Transitional
                    <span className="badge badge-primary badge-pill">98</span>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <img src="img/bu.jpeg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* Detail End */}
      </>

    </div>
  )
}


