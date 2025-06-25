import React from "react";
import "./Home.css";
import image from "../images/young-woman-studying-at-home.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE</h2>
          <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
          <p className="mb-0" style={{ color:"silver" }}>Check out the book from here</p>
          <Link className="viewBook my-3" to='/books'>View Books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            className="img-fluid"
            src={image}
            alt="Book Store"
            style={{ width: "91.5vh", height: "91.5vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
