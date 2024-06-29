import React, { useContext } from "react";
import { CrowdFundingContext } from "@/Context/CrowdFundingContext";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  const { searchResults } = useContext(CrowdFundingContext);

  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <p className="py-10 text-4xl font-bold leading-7 text-center text-deep-purple-accent-400">{title}</p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allcampaign?.map((campaign, i) => (
          <div
            onClick={() => (setDonate(campaign), setOpenModel(true))}
            key={i}
            className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
          >
            <img src={campaign.image} className="object-cover w-full h-64 rounded-t-lg" alt={campaign.title} />
            <div className="py-5 px-6">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">Days Left: {daysLeft(campaign.deadline)}</p>
              <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                <p className="text-xl font-bold leading-5">{campaign.title}</p>
              </a>
              <p className="mb-4 text-gray-700">{campaign.description}</p>
              <div className="flex space-x-4">
                <p className="font-semibold text-deep-purple-accent-400">Target: {campaign.target} ETH</p>
                <p className="font-semibold text-green-500">Raised: {campaign.amountCollected} ETH</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;