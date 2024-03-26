import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import QRCode from "react-qr-code";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Footer = () => {
  const history = useHistory();
  return (
    <div>
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Get In Touch</h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2" />
              The Grand Plaza, Vesu, Surat
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              +91 932-465-955
            </p>
            <p>
              <i className="fa fa-envelope mr-2" />
              Infinity@gmail.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" onClick={() => history.push("/")}>
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a
                className="text-white mb-2"
                onClick={() => history.push("/about")}
              >
                <i className="fa fa-angle-right mr-2" />
                About
              </a>
              <a
                className="text-white mb-2"
                onClick={() => history.push("/service")}
              >
                <i className="fa fa-angle-right mr-2" />
                Our Services
              </a>
              <a
                className="text-white mb-2"
                onClick={() => history.push("/project")}
              >
                <i className="fa fa-angle-right mr-2" />
                Our Projects
              </a>
              <a
                className="text-white mb-2"
                onClick={() => history.push("/contact")}
              >
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
              <a
                className="text-white mb-2"
                onClick={() => history.push("/oders")}
              >
                <i className="fa fa-angle-right mr-2" />
                Place Oders
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Get Inspired</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Design Ideas
              </a>
              <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Commercial Interiors
              </a>
              <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Interior Advice
              </a>
              <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Expert Advice
              </a>
              <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Meterials Guide
              </a>
              <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                2D/3D Models
              </a>
            </div>
          </div>
          <div
            style={{
              height: "auto",
              // margin: "0 auto",
              maxWidth: 200,
              width: "100%",
              cursor: "pointer",
            }}
          >
            <QRCode
              size={256}
              style={{
                // height: "auto",
                maxWidth: "100%",
                width: "100%",
              }}
              value={"https://frontend-liard-gamma.vercel.app/"}
              viewBox={"0 0 256 256"}
            />
          </div>
        </div>
      </div>

      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
};
