import React from "react";
import "./AboutUs.css"; // We'll create this CSS file for styling

function AboutUs() {
return (
  <div className="about-us">
    <div className="about-section section-1">
      <div className="content">
        <img src="path/to/image1.jpg" alt="Task Management Project" />
        <p>
          Task Management Project: Streamline your tasks and improve
          productivity.
        </p>
      </div>
    </div>
    <div className="about-section section-2">
      <div className="content">
        <img src="path/to/image2.jpg" alt="Task Management Project" />
        <p>Manage your projects efficiently and collaborate with your team.</p>
      </div>
    </div>
    <div className="about-section section-3">
      <div className="content">
        <img src="path/to/image3.jpg" alt="Task Management Project" />
        <p>Track your progress and stay on top of deadlines.</p>
      </div>
    </div>
    <div className="about-section section-4">
      <div className="content">
        <img src="path/to/image4.jpg" alt="Task Management Project" />
        <p>Customizable features to suit your workflow.</p>
      </div>
    </div>
    <div className="about-section section-5">
      <div className="content">
        <img src="path/to/image5.jpg" alt="Task Management Project" />
        <p>Join us today for a seamless experience!</p>
      </div>
    </div>
  </div>
);
}

export default AboutUs;
