import React, { useState, useContext } from "react";

import { CrowdFundingContext } from "@/Context/CrowdFunding";
import Logo from "@/Components/Logo";
import Link from "next/link";


const NavBar = () => {
  const { currentAccount, connectWallet, searchCampaigns } = useContext(CrowdFundingContext);

  // ai
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchCampaigns(searchQuery);
  };
  // ai

  const menuList = ["Home", "Your Projectes", "Blog", "Contact Us"];
  return (

    <div class="backgroundMain">
      <div class="px-2 mx-auto ml-16">
        <div class="relative flex items-center justifu-between">
          <div class="flex items-center">
            <Link href="/" aria-label="CrowdFundingBD" title="CrowdFundingBD" className="inline-flex items-center mr-8">
              <Logo />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100">CrowdFundingBD</span>
            </Link>
            <ul class="flex items-center space-x-8">
              <li>
                <Link href={`/`} className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/your_projectes`} className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Your Projectes
                </Link>
              </li>
              <li>
                <Link href={`/blogs`} className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href={`contact`} className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>


          {/* ai */}

          {/* ai */}


          {currentAccount && (
            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-8 ml-96">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 rounded-md text-black"
                placeholder="Search campaigns..."
              />
              <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none background">
                Search
              </button>
            </form>
          )}

          {!currentAccount && (
            <ul class="flex items-center hidden space-x-8 ml-96 lg:flex">
              <li>
                <button onClick={() => connectWallet()} class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition dration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none background" aria-label="Sign up" title="Sign up">Connect Wallet</button>
              </li>
            </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default NavBar;