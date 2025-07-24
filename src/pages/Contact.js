import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-main">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html {
          margin: 0;
          padding: 0;
          border: none;
          background-color: #0f2027; /* ✅ Fixed: background transparent removed */
          
        }

        .contact-main {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .contact-container {
          width: 100%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
          padding: 40px 30px;
          font-family: 'Segoe UI', sans-serif;
          color: #fff;
        }

        .contact-container h2 {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #00ffff;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #eee;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #666;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 16px;
          color: #fff;
          outline: none;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #ccc;
        }

        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #00ffff;
        }

        .submit-btn {
          background: linear-gradient(90deg, #007bff, #00c6ff);
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
          display: block;
          margin: 0 auto;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(90deg, #0056b3, #00aaff);
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 25px 20px;
          }
        }
      `}</style>

      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2>Contact Us</h2>
        <form>
          <motion.div className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </motion.div>

          <motion.div className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </motion.div>

          <motion.div className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label>Subject</label>
            <input type="text" placeholder="Enter subject" required />
          </motion.div>

          <motion.div className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label>Message</label>
            <textarea placeholder="Enter your message" required></textarea>
          </motion.div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
