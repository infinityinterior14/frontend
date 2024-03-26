import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { IoIosBed } from "react-icons/io";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SiHomeadvisor, SiHomeassistant } from "react-icons/si";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import axios from "axios";
import { Servicecardprops } from "../service/servicecardprops";
import { Projectcardprops } from "../project/projectcardprops";

export const Home = () => {
  const history = useHistory();

  const contentStyle = {
    // height: '160px',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const servicecontentStyle = {
    // height: '160px',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const [getdata, setdata] = useState([]);
  const [getdata1, setdata1] = useState([]);
  const [getfilldata, setfilldata] = useState("all");
  // console.log(getfilldata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/testimonial/view")
      .then((res) => {
        // console.log(res.data.data);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery/view")
      .then((res) => {
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <>
        <div className="container-fluid">
          <Carousel autoplay>
            <div style={contentStyle}>
              <div class="carousel-item active">
                <img
                  class="w-100"
                  src="img/crausol1.jpg"
                  alt="Image"
                  style={{ height: "710px" }}
                />
                <div class="carousel-caption d-flex flex-cllolumn align-items-center justify-content-center">
                  <div class="p-3">
                    <h4 class="text-primary text-uppercase font-weight-normal mb-md-3">
                      Creative Interior Design
                    </h4>
                    <h3 class="display-3 text-white mb-md-4">
                      Make Your Home Better
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div style={contentStyle}>
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="img\carusal.jpg"
                  alt="Image"
                  style={{ height: 710 }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 800 }}>
                    <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                      Creative Interior Design
                    </h4>
                    <h3 className="display-3 text-white mb-md-4">
                      Stay At Home In Peace
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        {/* Carousel End */}
        {/* About Start */}
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="d-flex flex-column align-items-center justify-content-center bg-primary h-100 py-5 px-3">
                  <i className="flaticon-brickwall display-1 font-weight-normal text-secondary mb-3" />
                  <h4 className="display-3 mb-3">15+</h4>
                  <h1 className="m-0">Years Experience</h1>
                </div>
              </div>
              <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                  Learn About Us
                </h6>
                <h1 className="mb-4 section-title">
                  We Are The Best Interior Designing Firm In Your City
                </h1>
                <p>
                  User experience depends on the interaction of the users with
                  the products, be it physical or virtual. Thus proper design
                  and planning of these products are crucial for a pleasant
                  experience. The same principles translate to the world of
                  interior design. The planning and design of the space can
                  alter the experience for the user to a large extent.
                </p>
                <div className="row py-2">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center mb-4">
                      <SiHomeassistant
                        className="font-weight-normal text-primary m-0 mr-3"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <h5 className="text-truncate m-0">Project Planning</h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center mb-4">
                      <SiHomeadvisor
                        className="font-weight-normal text-primary m-0 mr-3"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <h5 className="text-truncate m-0">
                        Exterior &amp; Interior
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center mb-4">
                      <MdOutlineMapsHomeWork
                        className="font-weight-normal text-primary m-0 mr-3"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <h5 className="text-truncate m-0">Commercial Design</h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center mb-4">
                      <HiOutlineBuildingOffice2
                        className="font-weight-normal text-primary m-0 mr-3"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <h5 className="text-truncate m-0">Residential Design</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Services Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6 pr-lg-5">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                  Our Awesome Services
                </h6>
                <h1 className="mb-4 section-title">
                  Awesome Interior Designing Services For Your Home
                </h1>
                <p>
                  We bring you carefully-curated interior design ideas, to give
                  your home a brand new look. Explore exclusive interior designs
                  and trends that are every bit inspirational as they are
                  practical. Our team of interior designers have put together
                  ideas across kitchen, bedroom, living room and more, to help
                  you pick a design that will best suit your home interior
                  requirements.
                </p>
                <li
                  className="btn btn-primary mt-3 py-2 px-4"
                  onClick={() => history.push("/service")}
                >
                  View More
                </li>
              </div>
              <div className="col-lg-6 p-0 pt-5 pt-lg-0">
                <Carousel autoplay slidesToShow={2}>
                  {" "}
                  {/* Set slidesToShow to 2 */}
                  <div style={servicecontentStyle}>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <center>
                        <IoIosBed className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3" />
                      </center>
                      <h5 className="mb-3">Bedroom Design</h5>
                      <p className="m-0" style={{ textAlign: "left" }}>
                        Stylish bedroom designs you'll love, at Livspace.Our
                        carefully-curated master bedroom designs come in a
                        variety of styles, colour schemes and decor ideas - all
                        of which can be customised to your taste.
                      </p>
                    </div>
                  </div>
                  <div style={servicecontentStyle}>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <center>
                        <FaKitchenSet className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3" />
                      </center>
                      <h5 className="mb-3">Kitchen Design</h5>
                      <p className="m-0" style={{ textAlign: "left" }}>
                        We craft simple modular kitchen designs that are the
                        perfect functionality and style.In the kitchen, you can
                        rely on our experienced team to help make your dream
                        kitchen come true.today start in kitchen remodeling
                      </p>
                    </div>
                  </div>
                  <div style={servicecontentStyle}>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <center>
                        <FaBath className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                      </center>

                      <h5 className="mb-3">Bathroom Design</h5>
                      <p className="m-0" style={{ textAlign: "left" }}>
                        When designing a bathroom, don't feel obligated to stick
                        to a single style. This eclectic bathroom from Lisa
                        Gilmore Design features a black metal grid glass
                        partition that houses the spacious shower.
                      </p>
                    </div>
                  </div>
                  <div style={contentStyle}>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <center>
                        <FaBath className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                      </center>

                      <h5 className="mb-3">Living room Design</h5>
                      <p className="m-0" style={{ textAlign: "left" }}>
                        A living room is simple, sleek and elegant. living room
                        for everyday enjoyment and relaxation.living room
                        interior designs and décor ideas at Livspace. We bring
                        you living room designs that are customizable, practical
                        and trendy
                      </p>
                    </div>
                  </div>
                  <div style={contentStyle}>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <center>
                        <FaBath className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                      </center>

                      <h5 className="mb-3">2D/3D Design</h5>
                      <p className="m-0" style={{ textAlign: "left" }}>
                        the best thing about Rendering is that it has evolved
                        significantly. While 2D is considered old-school, 3D
                        Architectural Renderings currently rule the industry.
                        Let’s find out the crucial features of 2D and 3D
                        renderings.
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}
        {/* Features Start */}
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mt-5 py-5 pr-lg-5">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                  Why Choose Us?
                </h6>
                <h1 className="mb-4 section-title">
                  15+ Years Experience In The Interior Design Industry
                </h1>
                <p className="mb-4">
                  Global and creatively and more attractive design makes us
                  different from these. We offer 2D and 3D designing, without
                  charge to our customers. We keep a good co-ordination with our
                  customers. We do not compromise the quality of our work. Our
                  task is to complete our given period. We also provide our
                  customers with free Vatu advice.
                </p>
                <ul className="list-inline">
                  <li>
                    <h5>
                      <i className="far fa-check-square text-primary mr-3" />
                      15+ Years Experience
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="far fa-check-square text-primary mr-3" />
                      Best Interior Design
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="far fa-check-square text-primary mr-3" />
                      Customer Satisfaction
                    </h5>
                  </li>
                </ul>
                <li
                  className="btn btn-primary mt-3 py-2 px-4"
                  onClick={() => history.push("/service")}
                >
                  View More
                </li>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                  <img className="h-100" src="img/tabel.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}
        {/* Projects Start */}

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col text-center mb-4">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                  Our Projects
                </h6>
                <h1 className="mb-4">
                  Some Of Our Awesome Interior Designing Projects
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center mb-2">
                <ul className="list-inline mb-4" id="portfolio-flters">
                  <li
                    // className={`btn btn-outline-primary m-1 ${
                    //   getfilldata === "all" && "active"
                    // }`}
                    className="btn btn-outline-primary m-1"
                    onClick={() => setfilldata("all")}
                  >
                    All
                  </li>
                  <li
                    // className={`btn btn-outline-primary m-1 ${
                    //   getfilldata === "Complete" && "active"
                    // }`}
                    className="btn btn-outline-primary m-1"
                    onClick={() => setfilldata("Complete")}
                  >
                    Complete
                  </li>
                  <li
                    className="btn btn-outline-primary m-1"
                    onClick={() => setfilldata("Running")}
                  >
                    Running
                  </li>
                  <li
                    className="btn btn-outline-primary m-1"
                    onClick={() => setfilldata("Upcoming")}
                  >
                    Upcoming
                  </li>
                  <div className="d-flex justify-content-md-end"></div>
                </ul>
              </div>
            </div>
            <div className="row mx-1 portfolio-container">
              {getdata1
                .filter((el) => getfilldata === "all" || el.cat === getfilldata)
                .map((el, index) => {
                  return (
                    <Projectcardprops
                      key={index}
                      image={"http://localhost:3000/images/" + el.img}
                      cat={el.cat}
                      hed={el.hed}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        {/* Projects End */}
        {/* Team Start */}
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
                  <h6 className="text-white font-weight-normal text-uppercase mb-3">
                    Our Team
                  </h6>
                  <h1 className="mb-0 text-center">Meet Our Team Members</h1>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 p-0 py-sm-5">
                <div className="owl-carousel team-carousel position-relative p-0 py-sm-5">
                  <div className="team d-flex flex-column text-center mx-3">
                    <Carousel autoplay slidesToShow={2}>
                      {" "}
                      {/* Set slidesToShow to 2 */}
                      <div style={contentStyle}>
                        <div className="position-relative">
                          <img
                            className="img-fluid w-100"
                            src="img\team-pintrest.jpg"
                            alt=""
                            style={{ width: "200px", height: "450px" }}
                          />
                          <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a
                              className="btn btn-outline-primary text-center mr-2 px-0"
                              style={{ width: 38, height: 38 }}
                              href="#"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              className="btn btn-outline-primary text-center px-0"
                              style={{ width: 38, height: 38 }}
                              href="#"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                          <div className="d-flex flex-column bg-secondary text-center py-3">
                            <h5 className="text-white">Jay Mishra </h5>
                            <p className="m-0" style={{ color: "darkgrey" }}>
                              Founder, CEO
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={contentStyle}>
                        <div className="team d-flex flex-column text-center mx-3">
                          <div className="position-relative">
                            <img
                              className="img-fluid w-100"
                              src="img\team2-pintrest.jpg"
                              alt=""
                              style={{ width: "200px", height: "450px" }}
                            />
                            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                              <a
                                className="btn btn-outline-primary text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-outline-primary text-center px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                          <div className="d-flex flex-column bg-secondary text-center py-3">
                            <h5 className="text-white">Herish Trivedi</h5>
                            <p className="m-0" style={{ color: "darkgrey" }}>
                              Head Of Designer
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={contentStyle}>
                        <div className="team d-flex flex-column text-center mx-3">
                          <div className="position-relative">
                            <img
                              className="img-fluid w-100"
                              src="img\team-3 pintrest.jpg"
                              alt=""
                              style={{ width: "200px", height: "450px" }}
                            />
                            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                              <a
                                className="btn btn-outline-primary text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-outline-primary text-center px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                          <div className="d-flex flex-column bg-secondary text-center py-3">
                            <h5 className="text-white">Shruti Thakre</h5>
                            <p className="m-0" style={{ color: "darkgrey" }}>
                              Wholesale Manager
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={contentStyle}>
                        <div className="team d-flex flex-column text-center mx-3">
                          <div className="position-relative">
                            <img
                              className="img-fluid w-100"
                              src="img\team-4 pintrest.jpg"
                              alt=""
                              style={{ width: "200px", height: "450px" }}
                            />
                            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                              <a
                                className="btn btn-outline-primary text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-outline-primary text-center px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                          <div className="d-flex flex-column bg-secondary text-center py-3">
                            <h5 className="text-white">Shivin Parmar-</h5>
                            <p className="m-0" style={{ color: "darkgrey" }}>
                              Team Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Testimonial Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-7 py-5 pr-md-5">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">
                  Testimonial
                </h6>
                <h1 className="mb-4 section-title">What Our Clients Say</h1>
                <Carousel autoplay slidesToShow={1}>
                  {" "}
                  {/* Set slidesToShow to 2 */}
                  {getdata.map((el, index) => {
                    return (
                      <Servicecardprops
                        img={"http://localhost:3000/images/" + el.img}
                        name={el.name}
                        city={el.city}
                        desc={el.desc}
                      />
                    );
                  })}
                 {/* <div style={servicecontentStyle}>
                  <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          className="img-fluid rounded-circle"
                          src="img/testimonial-1.jpg"
                          style={{ width: 60, height: 60 }}
                          alt=""
                        />
                        <div className="ml-3">
                          <h5>Mona Dhabalia</h5>
                          <i>Mumbai</i>
                        </div>
                      </div>
                      <p>
                        It was really good to get my home interior done by Heavenly Home
                        Interior and was really great to get it completed before 8 days
                        of actual handover date...Good Job Guys...Really appreciate the
                        team for their hard work and dedication..
                      </p>
                     
                    </div>
                  </div>
                </div>
                <div style={servicecontentStyle}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid rounded-circle"
                        src="img/testimonial-2.jpg"
                        style={{ width: 60, height: 60 }}
                        alt=""
                      />
                      <div className="ml-3">
                        <h5>Kowshik Kumar</h5>
                        <i>Bengaluru</i>
                      </div>
                    </div>
                    <p className="m-0">
                      It was a great experience with infinity. Nice interior
                      designs and quality works were delivered. Thanks to designer for
                      his efforts and quick response to the queries. Although the
                      project got a little delayed, I really appreciate and...
                    </p>
                  </div>
                </div>
                <div style={servicecontentStyle}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid rounded-circle"
                        src="img/testimonial-2.jpg"
                        style={{ width: 60, height: 60 }}
                        alt=""
                      />
                      <div className="ml-3">
                        <h5>Vikas Singh</h5>
                        <i>Surat</i>
                      </div>
                    </div>
                    <p className="m-0">
                      Very good design &amp; Insatllation loved the colour for
                      lamination suggested overall very happy with the approach
                      suggestions &amp; Implementation...Really appreciate the
                      team for their hard work and dedication..
                    </p>
                  </div>
                </div>   */}
                </Carousel>
                {/* <Carousel autoplay slidesToShow={1}>
                  {" "}
                  <div style={servicecontentStyle}>
                    <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            className="img-fluid rounded-circle"
                            src="img/testimonial-1.jpg"
                            style={{ width: 60, height: 60 }}
                            alt=""
                          />
                          <div className="ml-3">
                            <h5>Mona Dhabalia</h5>
                            <i>Mumbai</i>
                          </div>
                        </div>
                        <p>
                          It was really good to get my home interior done by
                          Heavenly Home Interior and was really great to get it
                          completed before 8 days of actual handover date...Good
                          Job Guys...Really appreciate the team for their hard
                          work and dedication..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={servicecontentStyle}>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          className="img-fluid rounded-circle"
                          src="img/testimonial-2.jpg"
                          style={{ width: 60, height: 60 }}
                          alt=""
                        />
                        <div className="ml-3">
                          <h5>Kowshik Kumar</h5>
                          <i>Bengaluru</i>
                        </div>
                      </div>
                      <p className="m-0">
                        It was a great experience with Heavenly Home. Nice
                        interior designs and quality works were delivered.
                        Thanks to designer for his efforts and quick response to
                        the queries. Although the project got a little delayed,
                        I really appreciate and...
                      </p>
                    </div>
                  </div>
                  <div style={servicecontentStyle}>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          className="img-fluid rounded-circle"
                          src="img/testimonial-2.jpg"
                          style={{ width: 60, height: 60 }}
                          alt=""
                        />
                        <div className="ml-3">
                          <h5>Vikas Singh</h5>
                          <i>Surat</i>
                        </div>
                      </div>
                      <p className="m-0">
                        Very good design &amp; Insatllation loved the colour for
                        lamination suggested overall very happy with the
                        approach suggestions &amp; Implementation...
                      </p>
                    </div>
                  </div>
                </Carousel> */}
              </div>
              <div className="col-md-5">
                <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                  <img className="h-100" src="img/pro.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Blog Start */}
        <div className="container-fluid bg-light pt-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col text-center mb-4">
                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                  Our Blog
                </h6>
                <h1 className="mb-4">
                  Read The Latest News &amp; Articles From Our Blog
                </h1>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-4 mb-4">
                <div className="card border-0 mb-2">
                  <img className="card-img-top" src="img/balcony.jpg" alt="" />
                  <div className="card-body bg-white p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="m-0 ml-3 text-truncate">Balcony</h5>
                    </div>
                    <p>
                      we have all the latest balcony designs at Livspace to turn
                      your balcony into your favourite place in the house.
                    </p>
                    <li
                      className="btn btn-primary mt-3 py-2 px-4"
                      onClick={() => history.push("/blog")}
                    >
                      view More
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card border-0 mb-2">
                  <img className="card-img-top" src="img/blogd.jpg" alt="" />
                  <div className="card-body bg-white p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="m-0 ml-3 text-truncate">
                        Full Home Design
                      </h5>
                    </div>
                    <p>
                      we’re certain you’ll find a healthy dose of inspiration
                      and trending kid’s room designs that will match your
                      child's personality!
                    </p>
                    <li
                      className="btn btn-primary mt-3 py-2 px-4"
                      onClick={() => history.push("/blog")}
                    >
                      view More
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card border-0 mb-2">
                  <img className="card-img-top" src="img/slide.jpg" alt="" />
                  <div className="card-body bg-white p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="m-0 ml-3 text-truncate">Living Room</h5>
                    </div>
                    <p>
                      Modern Living Room Design With Blue L Shaped Sofa And
                      Wooden Wall Panels
                    </p>
                    <li
                      className="btn btn-primary mt-3 py-2 px-4"
                      onClick={() => history.push("/blog")}
                    >
                      view More
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Footer Start */}
      </>
    </div>
  );
};
