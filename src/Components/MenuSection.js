import React from "react";
// import { Img } from "./../../public/assets/images/photo-1590650516494-0c8e4a4dd67e.jpeg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function MenuSection() {
  return (
    <section
      data-bs-version="5.1"
      className="menu menu2 cid-urdsLHI4m3"
      id="menu-5-urdsLHI4m3"
    >
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="https://mobiri.se">
                <img
                  src="/assets/images/photo-1590650516494-0c8e4a4dd67e.jpeg"
                  alt="Mobirise Website Builder"
                  style={{ height: "4.3rem" }}
                />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a
                className="navbar-caption text-black display-4"
                href="https://mobiri.se"
              >
                Projectify
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              {/* deyishiklik edilecek AboutUs ,SIgnin,SingUp cixardilacaq */}
              <li className="nav-item">
                <Link
                  className="nav-link link text-black display-4"
                  to="/aboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link text-black display-4"
                  to="/signin" // Link to the SignIn page
                >
                  SignIn
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link link text-black display-4"
                  to="/user" // Link to the SignIn page
                >
                  User
                </Link>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link link text-black display-4"
                  href="https://mobiri.se"
                >
                  SignUp
                </a>
              </li> */}
            </ul>

            <div className="navbar-buttons mbr-section-btn">
              <a className="btn btn-primary display-4" href="https://mobiri.se">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default MenuSection;
