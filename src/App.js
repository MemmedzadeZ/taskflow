import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderSection from "./Components/HeaderSection";
import Auth from "./Auth/Auth"; // Auth component
import AboutUs from "./AboutUs/AboutUs";
import User from "./User/User";
import SignalRHub from "./SignalR";
import InfoQuiz from "./QuizForm/InfoQuiz/InfoQuiz";
import TradeQuiz from "./QuizForm/TradeQuiz/TradeQuiz";
import DashboardTemplate from "./Dashboard/Dashboard";
import Project from "./Project/Project";
import Profile from "./Profile/Profile";

function App() {
  useEffect(() => {
    // Scriptleri dinamik olarak ekle
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };
    const scripts = [
      "https://r.mobirisesite.com/827554/assets/web/assets/jquery/jquery.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/bootstrap/js/bootstrap.bundle.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/parallax/jarallax.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/smoothscroll/smooth-scroll.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/ytplayer/index.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/dropdown/js/navbar-dropdown.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/vimeoplayer/player.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/embla/embla.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/embla/script.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/scrollgallery/scroll-gallery.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/theme/js/script.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/formoid/formoid.min.js?rnd=1729676536164",
    ];

    scripts.forEach(loadScript);
    return () => {};
  }, []);
  return (
    <div>
      <SignalRHub />
      {/* head */}

      <Routes>
        {/* Only render Auth for /signin or /aboutUs */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/aboutUs" element={<AboutUs />} />
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

        <Route path="/" element={<HeaderSection />} />
      </Routes>
    </div>
  );
}

export default App;
