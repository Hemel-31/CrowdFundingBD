import React, { useState, useEffect } from "react";

const PopUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState([]);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
      // Refresh donations list after making a donation
      const donationData = await getDonations(donate.pId);
      setAllDonationData(donationData);
      // Auto close the popup after donation
      setOpenModel(false);
      // Reload the page after donation
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const donationData = await getDonations(donate.pId);
      setAllDonationData(donationData);
    };
    fetchDonations();
  }, [donate.pId, getDonations]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
        <div className="relative w-auto mx-auto max-w-3xl">
          {/* Content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 text-white outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-600 rounded-t">
              <h3 className="text-3xl font-semibold">{donate.title}</h3>
              <button
                className="p-1 ml-auto border-0 text-white opacity-50 hover:opacity-100 transition-opacity duration-200"
                onClick={() => setOpenModel(false)}
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-gray-400 leading-relaxed">{donate.description}</p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-4 transition duration-200 bg-gray-700 border border-gray-600 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              {allDonationData.length > 0 && (
                <div className="max-h-40 overflow-y-auto bg-gray-900 p-2 rounded">
                  <p className="my-2 text-white text-lg leading-relaxed bg-gray-700 p-2 rounded">
                    Donation History
                  </p>
                
                {allDonationData?.map((donation, i) => (
                  <p key={i} className="my-2 text-white text-lg leading-relaxed bg-gray-700 p-2 rounded">
                    {i + 1}: {donation.donation} ETH - {donation.donator.slice(0, 35)}...
                  </p>
                ))}
              </div>
            )}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-600 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModel(false)}
              >
                Close
              </button>
              <button
                className="bg-deep-purple-accent-400 text-white active:bg-deep-purple-accent-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={createDonation}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
