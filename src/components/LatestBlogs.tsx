import { useEffect, useState } from "react";
import "./latest-blogs.css";

interface BlogItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  created: string;
}

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
        );

        if (!res.ok) throw new Error("Något gick fel vid hämtning");

        const data = await res.json();
        setBlogs(data);
        console.log("✅ Hämtade bloggar:", data);
      } catch (err) {
        console.error("❌ Fel vid hämtning:", err);
        setError("Kunde inte hämta bloggar från API:t.");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="latest-blogs" aria-labelledby="blogs-heading">
      <div className="container">
        <div className="header-row">
          <div>
            <h4 className="subtitle-blogs">Latest Blog and News</h4>
            <h3 id="blogs-heading" className="title">Check Out Our Latest Blog and News Update</h3>
          </div>

          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>

        {error ? (
          <p role="alert" style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : blogs.length === 0 ? (
          <p role="status" style={{ textAlign: "center", color: "#12372A" }}>Loading blogs...</p>
        ) : (
          <div className="blogs-grid">
            {blogs.slice(0, 3).map((blog) => (
              <div className="blog-card" key={blog.id} aria-label={`Blogg: ${blog.title}`}>
                <img
                  className="blog-image"
                  src={blog.imageUrl}
                  alt={blog.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x250?text=No+Image";
                  }}
                />

                <div className="blog-content">
                  <p className="date">
                    <img
                      className="date-icon"
                      src="src/assets/Icon-calendar.png"
                      alt=""
                      aria-hidden="true"
                    />
                    {new Date(blog.created).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <h3 className="blog-title">{blog.title}</h3>

                  <p className="blog-text">
                    {blog.description.length > 100
                      ? blog.description.slice(0, 100) + "..."
                      : blog.description}
                  </p>

                  <a className="read-more" href={`/blog/${blog.id}`} aria-label={`Read full blog post: ${blog.title}`}>
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
