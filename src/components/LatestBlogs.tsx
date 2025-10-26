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

  useEffect(() => {
    // ⛔ API is down: using fallback data
    const mockBlogs: BlogItem[] = [
      {
        id: "1",
        title: "Safe and Secure: The Importance of Choosing the Right Storage ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        created: "August 17,2025",
        imageUrl: "https://via.placeholder.com/400x250?text=Blog+1",

      },
      {
        id: "2",
        title: "Storage Trends 2024: Whats New in the World of Storage",
        description: "Mauris ac blandit nisi non sodales augue anid duso avinte...",
        created: "July 12,2025",
        imageUrl: "https://via.placeholder.com/400x250?text=Blog+2",
      },
      {
        id: "3",
        title: "Free Upp Your Space,Free Upp Your Life: The Power of Decluttering",
        description: "Quisque molestie nisl sed dui lacinia gravida...",
        created: "April 8,2025",
        imageUrl: "https://via.placeholder.com/400x250?text=Blog+3",
      },
    ];

    setBlogs(mockBlogs);
  }, []);

  return (
    <section className="latest-blogs">
      <div className="container">
        <div className="header-row">
          <div>
            <h4 className="subtitle">Latest Blog and News</h4>
            <h3 className="title">Check Out Our Latest Blog and News Update</h3>
          </div>

          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>

        <div className="blogs-grid">
          {blogs.slice(0, 3).map((blog) => (
            <div className="blog-card" key={blog.id}>

            <img
  className="blog-image"
  src={blog.imageUrl}
  alt=""
  onError={(e) => {
    e.currentTarget.src = "https://via.placeholder.com/400x250?text=Image";
  }}
/>  
          

              <div className="blog-content">
                
                <p className="date">
                    <img className="date-icon" src="src/assets/Icon-calendar.png" alt="date-icon"/>
                  {new Date(blog.created).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}

                </p>

                <h3 className="blog-title">{blog.title}</h3>

                <p className="blog-text">{blog.description}</p>

                <a className="read-more" href="#">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
