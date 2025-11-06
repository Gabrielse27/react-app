 import React, { useEffect, useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  author: string;
  text: string;
  company: string;
  avatar: string;
  rating: number;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
        );

        if (!res.ok) {
          throw new Error(`Serverfel: ${res.status}`);
        }

        const data = await res.json();

        // 🟢 Säkerställ att datan är i rätt format
        const list = Array.isArray(data) ? data : [data];

        const formatted = list.map((item: any) => ({
          id: item.id,
          author: item.name,
          text: item.comment,
          company: item.companyName,
          avatar: item.avatarUrl,
          rating: item.rating,
        }));

        setTestimonials(formatted);
        setError(null);
        console.log("✅ Hämtade testimonials:", formatted);
      } catch (err: any) {
        console.error("❌ Fel vid hämtning:", err);
        setError("Kunde inte hämta testimonials från API:t.");
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-text">
        <p className="testimonials-tag">Testimonials</p>
        <h2 className="section-title" style={{ color: "#ffffff" }}>
          See What Our Clients Say
        </h2>
        <p className="section-desc">
          These reviews are loaded live from the Swagger API.
        </p>
      </div>

      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : testimonials.length === 0 ? (
        <p style={{ textAlign: "center", color: "#ccc" }}>Loading testimonials...</p>
      ) : (
        <div className="testimonials-cards">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="stars">{"★".repeat(t.rating)}</div>
              <p className="testimonial-text">
                {t.text.length > 140 ? t.text.slice(0, 140) + "..." : t.text}
              </p>
              <div className="testimonial-footer">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="avatar"
                  style={{
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <strong>{t.author}</strong>
                  <p>{t.company}</p>
                </div>
                <span className="quote">❞</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
