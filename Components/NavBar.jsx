import React, {useState, useContext} from "react";

import { CrowdFundingContext } from "@/Context/CrowdFunding";
import Logo from "@/Components/Logo";
// import Menu from "@/Components/Menu";

const NavBar = () =>{
  const {currentAccount, connectWallet} = useContext(CrowdFundingContext);
  // const [insMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["White Paper","Project","Donation","Members"];
return(
    
  <div class="backgroundMain">
    <div class="px-4 py-5 mx-auto ml-16">
      <div class="relative flex items-center justifu-between">
        <div class="flex items-center">
          <a href="/" aria-label="CrowdFundingBD" title="CrowdFundingBD" class="inline-flex items-center mr-8">
            <Logo color="text-white"/>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100">CrowdFundingBD</span>
          </a>
          <ul class="flex items-center space-x-8">
            {menuList.map((el,i)=>(
              <li key={i+1}>
                <a href="/" aria-label="Our Product" title = "Our Product" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {!currentAccount && (
          <ul class="flex items-center hidden space-x-8 ml-96 lg:flex">
            <li>
              <button onClick={()=>connectWallet()} class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition dration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none background" aria-label="Sign up" title="Sign up">Connect Wallet</button>
            </li>
          </ul>
        )}
        
      </div>
    </div>
  </div>
);
};

export default NavBar;