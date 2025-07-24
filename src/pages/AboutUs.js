import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          font-family: Arial, sans-serif;
        }

        .about-container {
          max-width: 900px;
          margin: 60px auto;
          padding: 40px 30px;
          color: #fff;
          background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(50,50,50,0.4));
          border-radius: 12px;
          backdrop-filter: blur(10px);
          font-size: 18px;
          line-height: 1.7;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        }

        h1, h2 {
          text-align: center;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .team-section, .contact-section, .photo-section, .footer {
          max-width: 900px;
          margin: 40px auto;
          padding: 30px 20px;
          color: #fff;
          background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(50,50,50,0.3));
          border-radius: 12px;
          backdrop-filter: blur(8px);
        }

        .team-cards {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 20px;
          width: 180px;
          text-align: center;
          box-shadow: 0 0 10px rgba(255,255,255,0.1);
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: scale(1.05);
        }

        .photo-section img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(255,255,255,0.1);
        }

        .footer {
          text-align: center;
          font-size: 14px;
        }

        .social-links a {
          margin: 0 10px;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #1da1f2;
        }
      `}</style>

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>About Us</h1>
        <p>
          CalcZone is a comprehensive calculator platform designed to simplify everyday calculations.
          Whether you're managing your finances, tracking health metrics, converting units, or solving
          complex math problems, CalcZone offers an intuitive and powerful interface tailored for all users.
        </p>
        <p>
          Founded with the mission to provide accurate, fast, and user-friendly tools, CalcZone continues
          to evolve with innovative features. We are committed to delivering a seamless experience and
          empowering users through technology.
        </p>
        <p>
          Our development team focuses on building modular, responsive, and highly interactive components
          to ensure the best usability across devices. Your feedback is at the heart of our continuous improvement.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="team-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <motion.div whileHover={{ scale: 1.05 }} className="team-card">
            <h3>Ravi</h3>
            <p>Frontend Developer</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="team-card">
            <h3>Neha</h3>
            <p>Backend Specialist</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="team-card">
            <h3>Amit</h3>
            <p>UI/UX Designer</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="contact-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Contact Us</h2>
        <p>Email: support@calczone.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Bengaluru, India</p>
      </motion.div>

      {/* Animated Photo Section */}
      <motion.div
        className="photo-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Workspace</h2>
        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Office"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} CalcZone. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
