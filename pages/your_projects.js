import React,{useEffect, useContext, useState} from "react";

import { CrowdFundingContext } from "@/Context/CrowdFundingContext";
import {Hero,Card,PopUp} from "../Components";
import {CrowdFundingProvider} from "../Context/CrowdFundingContext";

const your_projects = () =>{
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    searchResults,
    getDonations,
  } = useContext(CrowdFundingContext);


  const [allcampaign, setAllcampaign] = useState();
  // const [searchCampaigns, setsearchCampaigns] = useState();

  useEffect(()=>{
    const getCampaignsData = getCampaigns();
    // const searchCampaignsData = searchCampaigns();
    return async()=>{
      const allData = await getCampaignsData;
      // const searchDatas = await searchCampaignsData;
      setAllcampaign(allData);
      // setsearchCampaigns(searchDatas);
    };
  },[]);

  const[openModel ,setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return(
    <>
      <Hero titleData={titleData} createCampaign={createCampaign}/>

      <Card
        title="All Listed Campaign"
        allcampaign={searchResults.length > 0 ? searchResults : allcampaign}
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

export default your_projects;