import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loaderjson from "../animations/loader.json";

// import image from "../../public/images/";

function HomePage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsAuthenticated(true); // Yalnız button klikləndikdə auth aktivləşsin
    navigate("/auth");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="generator" content="Mobirise v5.9.13, a.mobirise.com" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link
        rel="shortcut icon"
        href="https://r.mobirisesite.com/827554/assets/images/photo-1590649804407-daf662463c08.jpeg"
        type="image/x-icon"
      />
      <meta
        name="description"
        content="Discover efficient task and project management solutions that enhance productivity, streamline workflows, and foster collaboration among teams."
      />
      <title>Project Management Hub</title>
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/web/assets/mobirise-icons2/mobirise2.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/bootstrap/css/bootstrap.min.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/bootstrap/css/bootstrap-grid.min.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/bootstrap/css/bootstrap-reboot.min.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/parallax/jarallax.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/dropdown/css/style.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/socicon/css/styles.css?rnd=1729676536164"
      />
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/theme/css/style.css?rnd=1729676536164"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;700&display=swap&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        &lt;link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;700&amp;display=swap&amp;display=swap"
        /&gt;
      </noscript>
      <link
        rel="stylesheet"
        href="https://r.mobirisesite.com/827554/assets/css/mbr-additional.css?rnd=1729676536164"
        type="text/css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .navbar-fixed-top {\n        top: auto;\n      }\n      #mobiriseBanner.container-banner {\n        height: 8rem;\n        opacity: 1;\n        -webkit-animation: 4s linear animationHeight;\n        -moz-animation: 4s linear animationHeight;\n        -o-animation: 4s linear animationHeight;\n        animation: 4s linear animationHeight;\n        transition: all 0.5s;\n      }\n      #mobiriseBanner.container-banner.container-banner-closing {\n        pointer-events: none;\n        height: 0;\n        opacity: 0;\n        -webkit-animation: 0.5s linear animationClosing;\n        -moz-animation: 0.5s linear animationClosing;\n        -o-animation: 0.5s linear animationClosing;\n        animation: 0.5s linear animationClosing;\n      }\n      #mobiriseBanner .banner {\n        min-height: 8rem;\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: #fff;\n        padding: 10px;\n        opacity: 1;\n        -webkit-animation: 4s linear animationBanner;\n        -moz-animation: 4s linear animationBanner;\n        -o-animation: 4s linear animationBanner;\n        animation: 4s linear animationBanner;\n        z-index: 1031;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n      }\n      #mobiriseBanner .banner p {\n        overflow: hidden;\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        animation: none;\n        visibility: visible;\n      }\n      #mobiriseBanner .buy-license {\n        text-decoration: underline;\n      }\n      #mobiriseBanner .banner .btn {\n        margin: 0.3rem 0.5rem;\n        animation: none;\n        visibility: visible;\n      }\n      .navbar.opened {\n        z-index: 1032;\n      }\n      @-webkit-keyframes animationBanner {\n        0% {\n          opacity: 0;\n          top: -8rem;\n        }\n        75% {\n          opacity: 0;\n          top: -8rem;\n        }\n        100% {\n          opacity: 1;\n          top: 0;\n        }\n      }\n      @-moz-keyframes animationBanner {\n        0% {\n          opacity: 0;\n          top: -8rem;\n        }\n        75% {\n          opacity: 0;\n          top: -8rem;\n        }\n        100% {\n          opacity: 1;\n          top: 0;\n        }\n      }\n      @-o-keyframes animationBanner {\n        0% {\n          opacity: 0;\n          top: -8rem;\n        }\n        75% {\n          opacity: 0;\n          top: -8rem;\n        }\n        100% {\n          opacity: 1;\n          top: 0;\n        }\n      }\n      @keyframes animationBanner {\n        0% {\n          opacity: 0;\n          top: -8rem;\n        }\n        75% {\n          opacity: 0;\n          top: -8rem;\n        }\n        100% {\n          opacity: 1;\n          top: 0;\n        }\n      }\n      @-webkit-keyframes animationHeight {\n        0% {\n          height: 0;\n        }\n        75% {\n          height: 0;\n        }\n        100% {\n          height: 8rem;\n        }\n      }\n      @-moz-keyframes animationHeight {\n        0% {\n          height: 0;\n        }\n        75% {\n          height: 0;\n        }\n        100% {\n          height: 8rem;\n        }\n      }\n      @-o-keyframes animationHeight {\n        0% {\n          height: 0;\n        }\n        75% {\n          height: 0;\n        }\n        100% {\n          height: 8rem;\n        }\n      }\n      @keyframes animationHeight {\n        0% {\n          height: 0;\n        }\n        75% {\n          height: 0;\n        }\n        100% {\n          height: 8rem;\n        }\n      }\n\n      @-webkit-keyframes animationClosing {\n        0% {\n          height: 8rem;\n          opacity: 1;\n        }\n        30% {\n          height: 8rem;\n          opacity: 0.5;\n        }\n        100% {\n          height: 0;\n          opacity: 0;\n        }\n      }\n      @-moz-keyframes animationClosing {\n        0% {\n          height: 8rem;\n          opacity: 1;\n        }\n        30% {\n          height: 8rem;\n          opacity: 0.5;\n        }\n        100% {\n          height: 0;\n          opacity: 0;\n        }\n      }\n      @-o-keyframes animationClosing {\n        0% {\n          height: 8rem;\n          opacity: 1;\n        }\n        30% {\n          height: 8rem;\n          opacity: 0.5;\n        }\n        100% {\n          height: 0;\n          opacity: 0;\n        }\n      }\n      @keyframes animationClosing {\n        0% {\n          height: 8rem;\n          opacity: 1;\n        }\n        30% {\n          height: 8rem;\n          opacity: 0.5;\n        }\n        100% {\n          height: 0;\n          opacity: 0;\n        }\n      }\n\n      @media (max-width: 767px) {\n        #mobiriseBanner.container-banner {\n          height: 12rem;\n        }\n        #mobiriseBanner .banner {\n          min-height: 12rem;\n        }\n        @-webkit-keyframes animationBanner {\n          0% {\n            opacity: 0;\n            top: -12rem;\n          }\n          75% {\n            opacity: 0;\n            top: -12rem;\n          }\n          100% {\n            opacity: 1;\n            top: 0;\n          }\n        }\n        @-moz-keyframes animationBanner {\n          0% {\n            opacity: 0;\n            top: -12rem;\n          }\n          75% {\n            opacity: 0;\n            top: -12rem;\n          }\n          100% {\n            opacity: 1;\n            top: 0;\n          }\n        }\n        @-o-keyframes animationBanner {\n          0% {\n            opacity: 0;\n            top: -12rem;\n          }\n          75% {\n            opacity: 0;\n            top: -12rem;\n          }\n          100% {\n            opacity: 1;\n            top: 0;\n          }\n        }\n        @keyframes animationBanner {\n          0% {\n            opacity: 0;\n            top: -12rem;\n          }\n          75% {\n            opacity: 0;\n            top: -12rem;\n          }\n          100% {\n            opacity: 1;\n            top: 0;\n          }\n        }\n        @-webkit-keyframes animationHeight {\n          0% {\n            height: 0;\n          }\n          75% {\n            height: 0;\n          }\n          100% {\n            height: 12rem;\n          }\n        }\n        @-moz-keyframes animationHeight {\n          0% {\n            height: 0;\n          }\n          75% {\n            height: 0;\n          }\n          100% {\n            height: 12rem;\n          }\n        }\n        @-o-keyframes animationHeight {\n          0% {\n            height: 0;\n          }\n          75% {\n            height: 0;\n          }\n          100% {\n            height: 12rem;\n          }\n        }\n        @keyframes animationHeight {\n          0% {\n            height: 0;\n          }\n          75% {\n            height: 0;\n          }\n          100% {\n            height: 12rem;\n          }\n        }\n\n        @-webkit-keyframes animationClosing {\n          0% {\n            height: 12rem;\n            opacity: 1;\n          }\n          30% {\n            height: 12rem;\n            opacity: 0.5;\n          }\n          100% {\n            height: 0;\n            opacity: 0;\n          }\n        }\n        @-moz-keyframes animationClosing {\n          0% {\n            height: 12rem;\n            opacity: 1;\n          }\n          30% {\n            height: 12rem;\n            opacity: 0.5;\n          }\n          100% {\n            height: 0;\n            opacity: 0;\n          }\n        }\n        @-o-keyframes animationClosing {\n          0% {\n            height: 12rem;\n            opacity: 1;\n          }\n          30% {\n            height: 12rem;\n            opacity: 0.5;\n          }\n          100% {\n            height: 0;\n            opacity: 0;\n          }\n        }\n        @keyframes animationClosing {\n          0% {\n            height: 12rem;\n            opacity: 1;\n          }\n          30% {\n            height: 12rem;\n            opacity: 0.5;\n          }\n          100% {\n            height: 0;\n            opacity: 0;\n          }\n        }\n      }\n    ",
        }}
      />
      <section
        data-bs-version="5.1"
        className="menu menu2 cid-us18fEnf1k"
        once="menu"
        id="menu-5-us18fEnf1k"
      >
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand">
              {/* <span className="navbar-logo">
                <div className="lottie-welcomee">
                  <Lottie animationData={loaderjson} loop={true} />
                </div>
              </span> */}
              <span className="navbar-caption-wrap">
                <a className="navbar-caption text-black display-4" href=" ">
                  TaskFlow
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
                <span />
                <span />
                <span />
                <span />
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <Link className="nav-link link text-black display-4" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link link text-black display-4"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="#contacts-2-us18fEE15l"
                    aria-expanded="false"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="navbar-buttons mbr-section-btn">
                <button
                  className="btn btn-primary display-4"
                  onClick={handleButtonClick}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section
        data-bs-version="5.1"
        className="header18 cid-us18fEoaR4 mbr-fullscreen"
        id="hero-16-us18fEoaR4"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background YouTube Video */}

        {/* Overlay for Darkening the Background */}
        <div
          className="mbr-overlayy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <video
            src="/images/videoHomepage.mp4"
            autoPlay
            loop
            muted
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Content in the Foreground */}
        <div
          className="container-fluid"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row">
            <div className="content-wrap col-12 col-md-12">
              <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                <strong>Project Mastery</strong>
              </h1>
              <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                Unleash your productivity with our cutting-edge management
                tools!
              </p>
              <div className="mbr-section-btn">
                <a
                  className="btn btn-white-outline display-7"
                  onClick={handleButtonClick}
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        className="article4 cid-us18fEqV2R"
        id="about-us-4-us18fEqV2R"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-6 image-wrapper">
              <img
                className="w-100"
                src="https://r.mobirisesite.com/827554/assets/images/photo-1527689368864-3a821dbccc34.jpeg"
                alt="Mobirise Website Builder"
              />
            </div>
            <div className="col-12 col-md-12 col-lg">
              <div className="text-wrapper align-left">
                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                  <strong>Welcome to TaskFlow</strong>
                </h1>
                <p className="mbr-text mbr-fonts-style mb-3 display-7">
                  Where your ideas take flight, and collaboration meets
                  innovation! At TaskFlow, we’ve transformed the way teams
                  manage projects—making it simple, interactive, and
                  surprisingly delightful. Whether you’re building the next big
                  thing or organizing your daily grind, we’re here to keep you
                  inspired, connected, and in control.
                </p>
                <p className="mbr-text mbr-fonts-style mb-3 display-7">
                  Empower your team with tools designed for seamless
                  collaboration. From task delegation to real-time updates,
                  TaskFlow simplifies project management so you can focus on
                  what truly matters—achieving your goals. TaskFlow isn’t just
                  about getting things done—it’s about enjoying the process.
                  With intuitive design and playful elements, we bring joy to
                  every click, helping you stay motivated and productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="features03 cid-us18fEvYyN"
        id="news-1-us18fEvYyN"
      >
        <div className="container-fluid">
          <div className="row justify-content-center mb-5">
            <div className="col-12 content-head">
              <div className="mbr-section-head">
                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Latest Buzz</strong>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="item features-image col-12 col-md-6 col-lg-3 active">
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <img
                    src="https://r.mobirisesite.com/827554/assets/images/photo-1576485436509-a7d286952b65.jpeg"
                    alt="Mobirise Website Builder"
                    title=""
                  />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mt-0 mb-2 display-5">
                    <strong>Visual Control with AR/VR Support</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 20, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Presenting projects and tasks with a 3D/VR interface can be
                    particularly attractive to users who want a more
                    technological and interactive environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <img
                    src="https://r.mobirisesite.com/827554/assets/images/photo-1531482615713-2afd69097998.jpeg"
                    alt="Mobirise Website Builder"
                    title=""
                    data-slide-to={1}
                    data-bs-slide-to={1}
                  />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mb-2 mt-0 display-5">
                    <strong>Integrated Time Management Module</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 15, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Add features like time allocation and "Pomodoro Timer" for
                    tasks. Users can track the time spent on each task and plan
                    their work better.
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <img
                    src="https://r.mobirisesite.com/827554/assets/images/photo-1522202195465-df8a5f26fa15.jpeg"
                    alt="Mobirise Website Builder"
                    title=""
                    data-slide-to={2}
                    data-bs-slide-to={2}
                  />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mb-2 mt-0 display-5">
                    <strong>Motivational Elements: Gamification</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 10, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Add game elements to project management to increase
                    motivation in the workplace. For example: A point system for
                    users who complete tasks. Weekly or monthly Top Performer
                    status. Awards such as Achievement Badges.
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <img
                    src="https://r.mobirisesite.com/827554/assets/images/photo-1454165804606-c3d57bc86b40.jpeg"
                    alt="Mobirise Website Builder"
                    title=""
                    data-slide-to={2}
                    data-bs-slide-to={2}
                  />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mb-2 mt-0 display-5">
                    <strong>Motivational Elements: Gamification</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 5, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Add game elements to project management to increase
                    motivation in the workplace. For example: A point system for
                    users who complete tasks. Weekly or monthly Top Performer
                    status. Awards such as Achievement Badges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="pricing1 cid-us18fEwQNp"
        id="pricing-cards-1-us18fEwQNp"
      >
        <div className="container-fluid" />
      </section>
      <section
        data-bs-version="5.1"
        className="gallery4 cid-us18fEB1KA"
        id="gallery-12-us18fEB1KA"
      >
        <div className="container-fluid gallery-wrapper">
          <div className="row justify-content-center">
            <div className="col-12 content-head" />
          </div>
          <div className="grid-container">
            <div
              className="grid-container-1"
              style={{ transform: "translate3d(-200px, 0px, 0px)" }}
            >
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1531545514256-b1400bc00f31.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1516149893016-813d9a01d5d3.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1551836022-4c4c79ecde51.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1517048676732-d65bc937f952.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
            </div>
            <div
              className="grid-container-2"
              style={{ transform: "translate3d(-70px, 0px, 0px)" }}
            >
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1573165706511-3ffde6ef1fe3.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1590650516494-0c8e4a4dd67e.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1568658176307-bfbd2873abda.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/827554/assets/images/photo-1522071820081-009f0129c71c.jpeg"
                  alt="Mobirise Website Builder"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="people02 cid-us18fEBKiQ"
        id="testimonials-10-us18fEBKiQ"
      >
        <div className="container">
          <div className="row mb-5 ">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
              <strong>Cheers! </strong>
            </h3>
            <div className="col-12 content-head">
              <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-4 display-7">
                What Our Users Are Raving About
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="item features-without-image col-12 col-md-6 col-lg-4 mb-5">
              <div className="item-wrapper">
                <div className="card-box align-center">
                  <div className="iconfont-wrapper mb-3">
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                  </div>
                  <h5 className="card-title mbr-fonts-style mb-3 display-7">
                    This tool saved my sanity and my deadlines!
                  </h5>
                  <p className="card-text mbr-fonts-style mb-0 display-7">
                    Alex Johnson, Project Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4 mb-5">
              <div className="item-wrapper">
                <div className="card-box align-center">
                  <div className="iconfont-wrapper mb-3">
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                  </div>
                  <h5 className="card-title mbr-fonts-style mb-3 display-7">
                    I can finally keep my tasks organized and fun!
                  </h5>
                  <p className="card-text mbr-fonts-style mb-0 display-7">
                    Maria Lopez, Freelance Designer
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4 mb-5">
              <div className="item-wrapper">
                <div className="card-box align-center">
                  <div className="iconfont-wrapper mb-3">
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                    <span className="mbr-iconfont mobi-mbri-star mobi-mbri" />
                  </div>
                  <h5 className="card-title mbr-fonts-style mb-3 display-7">
                    A game changer for my team’s productivity!
                  </h5>
                  <p className="card-text mbr-fonts-style mb-0 display-7">
                    David Smith, Tech Startup Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="features10 cid-us18fECuIS"
        id="metrics-2-us18fECuIS"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="item features-without-image col-12 col-md-6 col-lg-4">
              <div className="item-wrapper">
                <div className="card-box align-left">
                  <p className="card-title mbr-fonts-style mb-3 display-1">
                    <strong>99%</strong>
                  </p>
                  <p className="card-text mbr-fonts-style mb-3 display-7">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4">
              <div className="item-wrapper">
                <div className="card-box align-left">
                  <p className="card-title mbr-fonts-style mb-3 display-1">
                    <strong>1K</strong>
                  </p>
                  <p className="card-text mbr-fonts-style mb-3 display-7">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4">
              <div className="item-wrapper">
                <div className="card-box align-left">
                  <p className="card-title mbr-fonts-style mb-3 display-1">
                    <strong>24/7</strong>
                  </p>
                  <p className="card-text mbr-fonts-style mb-3 display-7">
                    Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="image02 cid-us18fECnm8 mbr-fullscreen mbr-parallax-background"
        id="image-13-us18fECnm8"
      >
        <div className="container">
          <div className="row" />
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="list05 cid-us18fEDr6K"
        id="faq-3-us18fEDr6K"
      >
        <div className="container">
          <div className="col-12 mb-5 content-head">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Curious Minds Ask</strong>
            </h3>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="item features-without-image col-12 active">
                  <div className="item-wrapper">
                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                      <strong>What is this tool all about?</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                      This tool is your ultimate sidekick for mastering task and
                      project management like a pro! Whether you're juggling
                      tight deadlines, coordinating with team members, or
                      planning long-term goals, our platform is here to simplify
                      and supercharge your workflow.
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                      <strong>Can I use it for free?</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                      With the free version, you can create tasks, manage
                      projects, collaborate with your team, and enjoy a
                      streamlined, user-friendly experience—all at no cost. It's
                      the perfect way to get a feel for how our tool can
                      simplify your life and boost productivity.
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                      <strong>Is it easy to use?</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                      If you can click, you can conquer!
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                      <strong>What if I need help?</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                      Our support team is like ninjas—always ready to assist!
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                      <strong>Can I customize my dashboard?</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                      Currently, we do not offer full dashboard customization.
                      However, you can make changes to project-related tasks and
                      manage notifications to fit your workflow. Our focus is on
                      providing tools that help you stay organized while keeping
                      the interface simple and user-friendly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        className="contacts02 map1 cid-us18fEE15l"
        id="contacts-2-us18fEE15l"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Contact Us</strong>
                </h3>
              </div>
            </div>
            <div className="row ">
              <div className="card col-12 col-md-12 col-lg-6">
                <div className="card-wrapper">
                  <div className="text-wrapper">
                    <ul className="list mbr-fonts-style display-7">
                      <li className="mbr-text item-wrap">
                        Phone:
                        <a href="tel:+1-800-555-0199" className="text-black">
                          +1-800-555-0199
                        </a>
                      </li>
                      <li className="mbr-text item-wrap">
                        WhatsApp:
                        <a href="tel:+1-800-555-0199" className="text-black">
                          +1-800-555-0199
                        </a>
                      </li>
                      <li className="mbr-text item-wrap">
                        Email:
                        <a
                          href="mailto:support@taskmaster.com"
                          className="text-black"
                        >
                          support@taskmaster.com
                        </a>
                      </li>
                      <li className="mbr-text item-wrap">
                        Address: Azerbaijan
                      </li>
                      <li className="mbr-text item-wrap">
                        Working Hours: Mon-Fri: 9 AM - 5 PM
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="map-wrapper col-md-12 col-lg-6">
                <div className="google-map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="footer2 cid-us18fEE0UK"
        once="footers"
        id="footer-5-us18fEE0UK"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 center mt-2 mb-3">
              <p className="mbr-fonts-style copyright mb-0 display-7">
                © 2024 TaskMaster. All rights reserved.
              </p>
            </div>
            <div className="col-12 col-lg-6 center">
              <div className="row-links mt-2 mb-3">
                <ul className="row-links-soc">
                  <li className="row-links-soc-item mbr-fonts-style display-7">
                    <a href="#q" className="text-white">
                      Privacy
                    </a>
                  </li>
                  <li className="row-links-soc-item mbr-fonts-style display-7">
                    <a href="#q" className="text-white">
                      Terms
                    </a>
                  </li>
                  <li className="row-links-soc-item mbr-fonts-style display-7">
                    <a href="#q" className="text-white">
                      Support
                    </a>
                  </li>
                  <li className="row-links-soc-item mbr-fonts-style display-7">
                    <a href="#f" className="text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;
