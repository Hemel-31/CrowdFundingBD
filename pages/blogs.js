import React from "react";


const blogs = [
  {
    id: 1,
    title: "How Crowdfunding is Changing the World",
    author: "John Doe",
    date: "June 14, 2024",
    content: "Crowdfunding has revolutionized the way we raise money for projects and causes. It allows individuals and organizations to reach a global audience and secure funding in a relatively short period of time."
  },
  {
    id: 2,
    title: "Top 10 Tips for a Successful Crowdfunding Campaign",
    author: "Jane Smith",
    date: "May 20, 2024",
    content: "Launching a successful crowdfunding campaign requires careful planning and execution. Here are our top 10 tips to help you achieve your funding goals."
  },
  {
    id: 3,
    title: "Crowdfunding Success Stories",
    author: "Alice Johnson",
    date: "April 15, 2024",
    content: "Many projects have achieved great success through crowdfunding. In this blog post, we highlight some of the most inspiring success stories."
  },
  {
    id: 4,
    title: "Top 10 Tips for a Successful Crowdfunding Campaign",
    author: "Jane Smith",
    date: "May 20, 2024",
    content: "Launching a successful crowdfunding campaign requires careful planning and execution. Here are our top 10 tips to help you achieve your funding goals."
  },
  {
    id: 5,
    title: "Top 10 Tips for a Successful Crowdfunding Campaign",
    author: "Jane Smith",
    date: "May 20, 2024",
    content: "Launching a successful crowdfunding campaign requires careful planning and execution. Here are our top 10 tips to help you achieve your funding goals."
  }
];

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title highlight">
          Share Your Story with Us! Email us at{" "}
          <a href="mailto:hemel@crowdfundingbd.com" className="blog-email">
            hemel@crowdfundingbd.com
          </a>{" "}
          and Get Featured on Our Blog!
        </h1>
        <h2 className="blog-subheading">Our Blogs</h2>
      </div>
      <div className="blog-posts">
        {blogs.map((blog) => (
          <section key={blog.id} className="blog-post">
            <h3 className="blog-post-title">{blog.title}</h3>
            <div className="blog-post-meta">
              <p className="blog-post-author">
                <strong>Author:</strong> {blog.author}
              </p>
              <p className="blog-post-date">
                <strong>Date:</strong> {blog.date}
              </p>
            </div>
            <p className="blog-post-content">{blog.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
