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
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12 px-4 md:px-8">
      <div className="bg-[#051725] p-8 rounded shadow-md w-full max-w-6xl text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Share Your Story with Us! Email us at <a href="mailto:hemel@crowdfundingbd.com" className="text-deep-purple-accent-400">hemel@crowdfundingbd.com</a> and Get Featured on Our Blog!
        </h1>

        <h2 className="text-2xl font-bold mb-6">Our Blogs</h2>
        
        {blogs.map(blog => (
          <section key={blog.id} className="mb-12 p-6 bg-gray-900 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-300 mb-1"><strong>Author:</strong> {blog.author}</p>
            <p className="text-gray-300 mb-4"><strong>Date:</strong> {blog.date}</p>
            <p className="text-gray-300">{blog.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
