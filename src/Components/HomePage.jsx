import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loaderjson from "../animations/loader.json"

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
                  Get Started
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
          <iframe
            src="https://www.youtube.com/embed/TYB7YTQXwXY?autoplay=1&loop=1&playlist=TYB7YTQXwXY&mute=1&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3"
            title="background video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            style={{
              width: "100vw",
              height: "100vh",
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
                <a className="btn btn-white-outline display-7" href="/auth">
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
                  <strong>Meet Your New Sidekick</strong>
                </h1>
                <p className="mbr-text mbr-fonts-style mb-3 display-7">
                  Welcome to TaskMaster Pro, where chaos meets clarity! We’re
                  not just another project management tool; we’re your trusty
                  sidekick in the wild world of deadlines and deliverables. Our
                  mission? To turn your to-do list into a to-done list, one task
                  at a time!
                </p>
                <p className="mbr-text mbr-fonts-style mb-3 display-7">
                  Founded by a group of caffeine-fueled productivity
                  enthusiasts, we believe that managing tasks should be as fun
                  as a rollercoaster ride—minus the nausea. Our team is
                  dedicated to creating a platform that’s not only powerful but
                  also a joy to use. Say goodbye to boring spreadsheets and
                  hello to a vibrant, user-friendly interface!
                </p>
                <p className="mbr-text mbr-fonts-style mb-3 display-7">
                  Join us on this adventure, and let’s conquer those projects
                  together. With TaskMaster Pro, you’ll never feel alone in the
                  trenches of project management again!
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
                    <strong>New Features Launching Soon!</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 20, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Get ready for some exciting new features that will blow your
                    mind! Stay tuned for updates!
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
                    <strong>Webinar: Mastering Task Management</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 15, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Join our free webinar to learn tips and tricks for mastering
                    task management like a pro!
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
                    <strong>User Feedback: We Want You!</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 10, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    Your opinion matters! Help us improve by sharing your
                    feedback on our platform.
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
                    <strong>TaskMaster Pro: Awards and Recognition</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    October 5, 2024
                  </p>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    We’re thrilled to announce our recent awards for innovation
                    in project management software!
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
          <div className="row mb-5 justify-content-center">
            <div className="col-12 content-head">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Cheers!</strong>
              </h3>
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
          <div className="row mt-0 mt-md-5">
            <div className="col-12 align-center">
              <div className="mbr-section-btn">
                <a
                  className="btn btn-primary display-7"
                  href="https://mobiri.se"
                >
                  Join the Revolution!
                </a>
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
                      It’s your new best friend for managing tasks and projects
                      like a pro!
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                      <strong>Can I use it for free?</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                      Absolutely! We have a free version that’s packed with
                      features!
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
                      You bet! Make it as unique as you!
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
        className="form5 cid-us18fEEKym"
        id="contact-form-2-us18fEEKym"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Get In Touch!</strong>
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
              <form
                action="https://mobirise.eu/"
                method="POST"
                className="mbr-form form-with-styler"
                data-form-title="Form Name"
              >
                <input
                  type="hidden"
                  name="email"
                  data-form-email="true"
                  defaultValue="LbWURY/v83+wWO1Np8lmmYOyestFZgFbZZZMU0/Mxi0KHSDkQ5l6zFsY7DR8Mvs+l1W8ryYl8w/EiUsrqOH7wiF9/Q4TfcuTOBN7NbmDSWq2ORd8g0M2Xc4qXW5XIVQ3"
                />
                <div className="row">
                  <div
                    hidden="hidden"
                    data-form-alert=""
                    className="alert alert-success col-12"
                  >
                    Thanks for filling out the form!
                  </div>
                  <div
                    hidden="hidden"
                    data-form-alert-danger=""
                    className="alert alert-danger col-12"
                  >
                    Oops...! some problem!
                  </div>
                </div>
                <div className="dragArea row">
                  <div
                    className="col-md col-sm-12 form-group mb-3"
                    data-for="name"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      data-form-field="name"
                      className="form-control"
                      defaultValue=""
                      id="name-contact-form-2-us18fEEKym"
                    />
                  </div>
                  <div
                    className="col-md col-sm-12 form-group mb-3"
                    data-for="email"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      data-form-field="email"
                      className="form-control"
                      defaultValue=""
                      id="email-contact-form-2-us18fEEKym"
                    />
                  </div>
                  <div className="col-12 form-group mb-3" data-for="textarea">
                    <textarea
                      name="textarea"
                      placeholder="Message"
                      data-form-field="textarea"
                      className="form-control"
                      id="textarea-contact-form-2-us18fEEKym"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                    <button type="submit" className="btn btn-primary display-7">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
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
            <div className="row justify-content-center">
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
