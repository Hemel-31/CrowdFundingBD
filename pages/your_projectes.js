// your_projectes
import React,{useEffect, useContext, useState} from "react";

import { CrowdFundingContext } from "@/Context/CrowdFunding";
import {Hero,Card,PopUp} from "../Components";
import {CrowdFundingProvider} from "../Context/CrowdFunding";

const your_projectes = () =>{
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    searchResults,
    getDonations,
  } = useContext(CrowdFundingContext);


  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(()=>{
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async()=>{
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  },[]);

  const[openModel ,setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return(
    <>

<Card 
        title="Your Created Campaign"
        allcampaign={searchResults.length > 0 ? searchResults : usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel &&(
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  )
};

export default your_projectes;