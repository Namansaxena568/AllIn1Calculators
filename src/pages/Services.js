import React from 'react';
import { motion } from 'framer-motion';

const AllIn1Calculator = () => {
  return (
    <div className="services-main">
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
          background-color: #0f2027; /* FIXED: changed from transparent */
        }

        .services-main {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          padding: 50px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .services-container {
          max-width: 1200px;
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
          padding: 40px;
          color: #fff;
        }

        .services-title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          color: #00ffff;
          margin-bottom: 40px;
        }

        .services-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 25px;
          max-width: 280px;
          flex: 1 1 250px;
          color: #fff;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .service-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .service-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #00ffff;
        }

        .service-description {
          font-size: 15px;
          color: #ddd;
        }

        @media (max-width: 600px) {
          .services-container {
            padding: 25px 20px;
          }
        }
      `}</style>

      <motion.div 
        className="services-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {[
            {
              icon: "➗",
              title: "Basic Calculator",
              desc: "Perform simple arithmetic like addition, subtraction, multiplication, and division.",
            },
            {
              icon: "📐",
              title: "Scientific Calculator",
              desc: "Advanced calculations with trigonometry, exponents, roots, and logarithms.",
            },
            {
              icon: "💱",
              title: "Currency Converter",
              desc: "Real-time conversion between global currencies with updated exchange rates.",
            },
            {
              icon: "📊",
              title: "GST & Tax Calculator",
              desc: "Easily calculate GST, VAT, and income tax across various slabs.",
            },
            {
              icon: "🏦",
              title: "Loan & EMI Calculator",
              desc: "Calculate monthly EMIs and total interest on personal, home, or car loans.",
            },
            {
              icon: "🕒",
              title: "Age & Date Calculator",
              desc: "Find exact age or days between any two dates instantly.",
            }
          ].map((tool, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{tool.icon}</div>
              <div className="service-title">{tool.title}</div>
              <div className="service-description">{tool.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllIn1Calculator;
