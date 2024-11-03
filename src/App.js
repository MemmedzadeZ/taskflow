import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Auth from "./Auth/Auth"; // Auth component

import User from "./User/User";
import SignalRHub from "./SignalR";
import InfoQuiz from "./QuizForm/InfoQuiz/InfoQuiz";
import TradeQuiz from "./QuizForm/TradeQuiz/TradeQuiz";
import DashboardTemplate from "./Dashboard/Dashboard";
import Project from "./Project/Project";
import Profile from "./Profile/Profile";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <div>
      <SignalRHub />

      {/* head */}
      <Routes>
        {/* Only render Auth for /signin or /aboutUs */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/quiz" element={<InfoQuiz />} />
        <Route path="/quiztrade" element={<TradeQuiz />} />
        <Route path="/dashboard" element={<DashboardTemplate />} />
        <Route path="/project" element={<Project />} />

        <Route path="/profile" element={<Profile />} />

        {/* Render the main layout (Header, Menu, Sections, etc.) for other routes */}
        {/* <Route
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
        /> */}

        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
