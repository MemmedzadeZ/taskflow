import React from "react";
import { Helmet } from "react-helmet"; // For head configurations
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderSection from "./Components/HeaderSection";
import MenuSection from "./Components/MenuSection";
import AboutSection from "./Components/AboutSection";
import MetricsSection from "./Components/MetricsSection";
import FaqSection from "./Components/FaqSection";
import VideoSection from "./Components/VideoSection";
import Testimonials from "./Components/Testimonials";
import ContactFormSection from "./Components/ContactFormSection";
import FooterSection from "./Components/FooterSection";
import Auth from "./Auth/Auth"; // Auth component
import AboutUs from "./AboutUs/AboutUs";
import User from "./User/User";
import SignalRHub from "./SignalR";
import InfoQuiz from "./QuizForm/InfoQuiz/InfoQuiz";
import TradeQuiz from "./QuizForm/TradeQuiz/TradeQuiz";
import DashboardTemplate from "./Dashboard/Dashboard";
import FeaturesSection from "./Components/FeaturesSection";
import Project from "./Project/Project";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div>
      <SignalRHub />
      {/* head */}
      <Helmet>
        {/* Meta tags */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="generator" content="Mobirise v5.9.18, mobirise.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta
          name="description"
          content="Discover our innovative project management solutions designed to streamline your workflow and enhance team collaboration. Join us today for a seamless experience!"
        />

        {/* Title */}
        <title>Project Management Hub</title>

        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="/assets/images/photo-1590650516494-0c8e4a4dd67e.jpeg"
          type="image/x-icon"
        />

        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="assets/web/assets/mobirise-icons2/mobirise2.css"
        />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="/assets/bootstrap/css/bootstrap-grid.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/bootstrap/css/bootstrap-reboot.min.css"
        />
        <link rel="stylesheet" href="/assets/dropdown/css/style.css" />
        <link rel="stylesheet" href="/assets/socicon/css/styles.css" />
        <link rel="stylesheet" href="/assets/theme/css/style.css" />

        {/* Google Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          as="style"
          href="/assets/mobirise/css/mbr-additional.css"
        />
        <link
          rel="stylesheet"
          href="/assets/mobirise/css/mbr-additional.css"
          type="text/css"
        />
      </Helmet>

      <Routes>
        {/* Only render Auth for /signin or /aboutUs */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/user" element={<User />} />
        <Route path="/quiz" element={<InfoQuiz />} />
        <Route path="/quiztrade" element={<TradeQuiz />} />
        <Route path="/dashboard" element={<DashboardTemplate />} />
        <Route path="/project" element={<Project />} />

        {/* <Route path="/profile" element={<Profile />} /> */}

        {/* Render the main layout (Header, Menu, Sections, etc.) for other routes */}
        <Route
          path="/"
          element={
            <>
              <HeaderSection />
              <MenuSection />
              <AboutSection />
              <MetricsSection />
              <FaqSection />
              <VideoSection />
              <FeaturesSection />
              <Testimonials />
              <ContactFormSection />
              <FooterSection />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
