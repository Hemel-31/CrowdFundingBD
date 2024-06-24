import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCamapaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
        <div className="relative bg-opacity-75 backgroundMain px-24 py-10 mx-auto overflow-hidden  ">
          <div className="flex flex-col items-center justify-between">
            <div className="w-full max-w-xl">
              <div className="bg-white ronded shadow-2xl p-7">
                <h3 className="mb-4 text-xl font-semibold">Campaign</h3>

                <form>
                  <div className="mb-1">
                    <label htmlFor="firstName" className="inline-block mb-1 font-medium">
                      Title
                    </label>
                    <input onChange={(e) =>
                      setCamapaign({
                        ...campaign,
                        title: e.target.value,
                      })}
                      placeholder="title"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName" />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="lastName"
                      className="inline-block mb-1 font-medium">Description</label>
                    <input onChange={(e) =>
                      setCamapaign({
                        ...campaign,
                        description: e.target.value,
                      })}
                      placeholder="description"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName" />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="email"
                      className="inline-block mb-1 font-medium">Target Amount</label>
                    <input
                      onChange={(e) =>
                        setCamapaign({
                          ...campaign,
                          amount: e.target.value,
                        })}
                      placeholder="amount"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email" />

                  </div>
                  <div className="mb-1">
                    <label htmlFor="email"
                      className="inline-block mb-1 font-medium">Target Amount</label>
                    <input
                      onChange={(e) =>
                        setCamapaign({
                          ...campaign,
                          deadline: e.target.value,
                        })}
                      placeholder="Date"
                      required
                      type="date"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email" />
                  </div>

                  <div className="mt-4 mb-2">
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none newColor"
                    >Create Campaign</button>
                  </div>
                  <p className="text-xs text-gray-600">Create your Campaign for raise funds</p>
                </form>

              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Hero;