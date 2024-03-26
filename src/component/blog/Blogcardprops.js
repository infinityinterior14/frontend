import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Blogcardprops = (props) => {
  const history = useHistory();
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 mb-2">
        <img
          className="card-img-top"
          src={props.image}
          alt=""
          style={{ width: "421px", height: "300px", objectFit: "cover" }}
        />
        <div className="card-body bg-white p-4">
          <div
            className="d-flex align-items-center mb-3"
            style={{ height: "25px" }}
          >
            <h5 className="m-0 ml-3 text-truncate">{props.hed}</h5>
          </div>
          <p className="blogcard-lineclamp">{props.desc}</p>
          <li
            className="btn btn-primary mt-3 py-2 px-4"
            onClick={() => history.push("/single")}
          >
            View More
          </li>
          {props.update}
          {props.del}
        </div>
      </div>
    </div>
  );
};

export default Blogcardprops;
