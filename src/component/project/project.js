import React, { useEffect, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
// import { MdSystemUpdateAlt } from "react-icons/md";
// import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Projectcardprops } from "./projectcardprops";

export const Project = () => {
  const history = useHistory();
  const [getdata, setdata] = useState([]);
  const [getfilldata, setfilldata] = useState("all");
  // console.log(getfilldata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery/view")
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata]);

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                Our Projects
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
                  Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Start */}
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
            {getdata
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
    </div>
  );
};
