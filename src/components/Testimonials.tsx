 import React, { useEffect, useState } from "react";
import './Testimonials.css';

interface Testimonial {
  id: number;
  author: string;
  text: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  // Hämta testimonials från API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3') // Byt ut med din riktiga API
      .then(response => response.json())
      .then(data => {
        // Anpassa till din datamodell om API:et är annorlunda
        const formatted = data.map((item: any, index: number) => ({
          id: index,
          author: item.name,
          text: item.body
        }));
        setTestimonials(formatted);
      })
      .catch(error => console.error('Fel vid hämtning:', error));
  }, []);

  // Skicka ett nytt testimonial
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTestimonial = {
      author,
      text
    };

    fetch('https://jsonplaceholder.typicode.com/comments', { // Byt ut med din riktiga POST-endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTestimonial)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Skickad:', data);
        // Lägg till direkt i listan
        setTestimonials([...testimonials, { id: testimonials.length + 1, ...newTestimonial }]);
        setAuthor('');
        setText('');
      })
      .catch(error => console.error('Fel vid POST:', error));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-text">
        <p className="section-tag">Testimonials</p>
        <h2 className="section-title" style={{ color: "#ffffff"}}>See What Our Clients Say</h2>
        <p className="section-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisi sed dui lacinia gravida.
        </p>
      </div>

      {/* FORMULÄR FÖR NY TESTIMONIAL */}
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Your review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Skicka</button>
      </form>

      <div className="testimonials-cards">
        {testimonials.map((t) => (
          <div className="testimonial-card " key={t.id}>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
  {t.text.length > 140 ? t.text.slice(0, 140) + '...' : t.text}
</p>


            <div className="testimonial-footer">
              <div className="avatar" />
              <div>
                <strong>{t.author}</strong>
                <p>Customer</p>
              </div>
              <span className="quote">❞</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
