import React, { useState, useEffect } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
    image: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://media.licdn.com/dms/image/C4D12AQEJ3RcPYNZctQ/article-cover_image-shrink_600_2000/0/1620695786724?e=2147483647&v=beta&t=hD4LcXapjEGRaVMDc-6NmHOPiIapMDiizlB2YcHFM_g",
    "https://www.unrwa.org/sites/default/files/styles/full_news_745x450/public/content/news_articles/news_article_91716_37396_1557996560.jpg?itok=7pl0OA_P",
    "https://www.thegleaner.com/gcdn/presto/2020/02/10/PEVC/31e0f88d-2db9-46ee-98d2-85fb99605b70-GettyImages-1135253768.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
      console.log(data);
      // Reload the page after creating a campaign
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      ></div>
      <div className="relative bg-opacity-75 px-8 py-10 mx-auto overflow-hidden shadow-lg rounded-lg max-w z-10" style={{ background: 'rgba(5, 23, 37, 0.8)' }}>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full max-w-xl">
            <div className="rounded-lg shadow-xl p-8" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">Create Campaign</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="title" className="inline-block mb-2 font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
                    placeholder="Title"
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-deep-purple-accent-400 focus:ring focus:ring-deep-purple-accent-400 focus:ring-opacity-50"
                    id="title"
                    name="title"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="inline-block mb-2 font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                    placeholder="Description"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-deep-purple-accent-400 focus:ring focus:ring-deep-purple-accent-400 focus:ring-opacity-50"
                    id="description"
                    name="description"
                    rows="4"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="image_url" className="inline-block mb-2 font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    onChange={(e) => setCampaign({ ...campaign, image: e.target.value })}
                    placeholder="Image URL"
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-deep-purple-accent-400 focus:ring focus:ring-deep-purple-accent-400 focus:ring-opacity-50"
                    id="image_url"
                    name="image_url"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="amount" className="inline-block mb-2 font-medium text-gray-700">
                    Target Amount (ETH)
                  </label>
                  <input
                    onChange={(e) => setCampaign({ ...campaign, amount: e.target.value })}
                    placeholder="Amount"
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-deep-purple-accent-400 focus:ring focus:ring-deep-purple-accent-400 focus:ring-opacity-50"
                    id="amount"
                    name="amount"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="deadline" className="inline-block mb-2 font-medium text-gray-700">
                    Deadline
                  </label>
                  <input
                    onChange={(e) => setCampaign({ ...campaign, deadline: e.target.value })}
                    placeholder="Deadline"
                    required
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-deep-purple-accent-400 focus:ring focus:ring-deep-purple-accent-400 focus:ring-opacity-50"
                    id="deadline"
                    name="deadline"
                  />
                </div>
                <div className="mt-6 mb-4">
                  <button
                    onClick={createNewCampaign}
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white transition duration-200 bg-deep-purple-accent-400 rounded-md shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Create Campaign
                  </button>
                </div>
                <p className="text-sm text-gray-600">Create your campaign to raise funds.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;