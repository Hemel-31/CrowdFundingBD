import React,{ useContext } from "react";
import { CrowdFundingContext } from "@/Context/CrowdFunding";

const Card= ({allcampaign, setOpenModel, setDonate, title})=>{
  console.log(allcampaign);

  const { searchResults } = useContext(CrowdFundingContext);

  const daysLeft = (deadline) =>{
    const difference = new Date(deadline).getTime()-Date.now();
    const remainingDays = difference/(1000*3600*24);
    return remainingDays.toFixed(0);
  };

  return(
    <div className="max-auto px-8 py-10">
      <p className="py-10 text-2xl font-bold leading-5">{title}</p>
      <div className="grid gap-5 grid-cols-3 max-w-full">
        {allcampaign?.map((campaign,i)=>(
          <div
            onClick={()=>(setDonate(campaign),setOpenModel(true))}
            key={i+1}
            className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded">
              <img src={campaign.image} className="object-cover w-full h-64 rounded" alt={campaign.title} />
              {/* https://i.pinimg.com/originals/de/ff/e4/deffe42dd0ea88078c939d05d1e2a781.jpg */}
              <div className="py-5 pl-2">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercash">Days Left: {daysLeft(campaign.deadline)}</p>
                <a href="/" aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                  <p className="text-2xl font-bold leading-5">{campaign.title}</p>
                </a>
                  <p className="mb-4 text-gray-700">{campaign.description}</p>
                  <div className="flex space-x-4">
                    <p className="font-semibold">Target: {campaign.target} ETH</p>
                    <p className="font-semibold">Raised: {campaign.amountCollected} ETH</p>
                  </div>
              </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Card;