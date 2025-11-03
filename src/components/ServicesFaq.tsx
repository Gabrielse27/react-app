 import React, { useState, useEffect } from "react";
 import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./services-faq.css";

    interface FaqItem {
  question: string;
  answer: string;
}

const ServicesFaq: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Hämta FAQ från API
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        // ⚠️ Ändra denna URL till ditt riktiga API-endpoint
        const response = await fetch("/faqs.json");

        if (!response.ok) {
          throw new Error("Något gick fel vid hämtningen av FAQ-data");
        }

        const data = await response.json();
        setFaqData(data); // sparar frågorna i state
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return (
      <section className="faq-section">
        <div className="faq-area">
          <p>Laddar vanliga frågor...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="faq-section">
        <div className="faq-area">
          <p style={{ color: "red" }}>Fel: {error}</p>
        </div>
      </section>
    );
  }







  return (
    <section className="faq-section">
      <div className="faq-area">
        <div className="faq-content">
            <h4 className="faq-text">FAQs</h4>

        <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br>
      </br> ullamcorper mattis, pulvinar dapibus leo.

     </div>
      
     </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <p>{item.question}</p>
                <span className="faq-icon">
                  {activeIndex === index ? (
  <FaChevronUp className="faq-icon" />
) : (
  <FaChevronDown className="faq-icon" />
)}
                </span>
              </div>

              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  opacity: activeIndex === index ? "1" : "0",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFaq;
