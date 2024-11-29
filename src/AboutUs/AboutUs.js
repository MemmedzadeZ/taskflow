import React from "react";
import "./AboutUs.css"; // Custom CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Our Project Management Team</h1>
        <p>
          Welcome to our About Us page! We are passionate about delivering the
          best project management tools to help you succeed.
        </p>
      </header>

      {/* Values Section */}
      <section className="about-section values-section">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> Continuously improving our platform
            with cutting-edge technology.
          </li>
          <li>
            <strong>Integrity:</strong> We believe in transparency and ethical
            practices in everything we do.
          </li>
          <li>
            <strong>Customer Success:</strong> Our success is measured by how
            much we help our clients achieve.
          </li>
        </ul>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide world-class project management solutions
          that simplify workflows, enhance collaboration, and help teams meet
          their goals efficiently. We are constantly evolving to meet the needs
          of modern businesses.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/assets/images/team1.jpg" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-member">
            <img src="/assets/images/team2.jpg" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Lead Project Manager</p>
          </div>
          <div className="team-member">
            <img src="/assets/images/team3.jpg" alt="Emily Johnson" />
            <h3>Emily Johnson</h3>
            <p>UX/UI Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-section call-to-action">
        <h2>Join Us on Our Journey</h2>
        <p>
          We're always looking for talented individuals who share our passion
          for project management and innovation. Get in touch with us to learn
          more about career opportunities or how we can help your business
          thrive.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
