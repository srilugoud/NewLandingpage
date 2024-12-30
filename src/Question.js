import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "./Questionn.css";
import Image from "./assets/thinking.png"

function Question({ isDarkMode }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    { icon: "💡", question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { icon: "🚀", question: "How do I start with React?", answer: "Install Node.js and use Create React App to set up a new project." },
    { icon: "🔧", question: "What are components in React?", answer: "Components are reusable building blocks of React applications." },
    { icon: "📦", question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to HTML." },
    { icon: "🖥️", question: "What is a virtual DOM?", answer: "The virtual DOM is a lightweight representation of the real DOM." },
  ];

  return (
    <div className={`faq-container  ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="faq-image">
        <img src={Image} alt="Thinking illustration" />
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="question" onClick={() => toggleAnswer(index)}>
                <span>{faq.icon}</span>
                <h3>{faq.question}</h3>
                <span className="dropdown-icon">
                  {activeQuestion === index ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
                </span>
              </div>
              {activeQuestion === index && (
                <p className="answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
