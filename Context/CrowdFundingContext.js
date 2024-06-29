import React, { createContext, useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { CrowdFundingABI, CrowdFundingAddress } from './constants';

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingContext = createContext();

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState('');
    const [campaigns, setCampaigns] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const createCampaign = async (campaign) => {
        const { title, description, amount, deadline, image } = campaign;
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        console.log(currentAccount);
        try {
            const transaction = await contract.createCampaign(
                currentAccount, //owner
                title,
                description,
                ethers.utils.parseUnits(amount, 18),
                new Date(deadline).getTime(),
                image
            );

            await transaction.wait();

            console.log("contract call success", transaction);
        } catch (error) {
            console.log("contract call failure", error);
        }
    };

    const getCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();

        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            image: campaign.image,
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString(),),
            pId: i,
        }));
        setCampaigns(parsedCampaigns);
        return parsedCampaigns;
    };


    const getUserCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const allCampaigns = await contract.getCampaigns();

        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const currentUser = accounts[0];

        const filteredCampaigns = allCampaigns.filter((campaign) =>
            campaign.owner.toLowerCase() === currentUser.toLowerCase());

        const userData = filteredCampaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(
                campaign.amountCollected.toString()
            ),
            image: campaign.image,
            pId: i,
        }));
        return userData;

    };

    const donate = async (pId, amount) => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        // Get campaign details
        const campaign = campaigns.find((campaign) => campaign.pId === pId);

        if (!campaign) {
            console.log("Campaign not found");
            return;
        }

        const targetAmount = parseFloat(campaign.target);
        const raisedAmount = parseFloat(campaign.amountCollected);

        if (raisedAmount >= targetAmount) {
            console.log("Target amount has been reached. No more donations accepted.");
            return;
        }

        try {
            if (raisedAmount >= targetAmount) {
                throw new Error("Target amount has been reached. No more donations accepted.");
            }
            const campaignData = await contract.donateToCampaign(pId, {
                value: ethers.utils.parseEther(amount),
            });

            await campaignData.wait();
            await getCampaigns();

            // Reload the page after donation
            window.location.reload();

            return campaignData;
        } catch (error) {
            console.log("Donation failed", error);
        }
    };

    const getDonations = async (pId) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString()),
            });
        }
        return parsedDonations;
    };

    // ai
    const searchCampaigns = (query) => {
        const filteredCampaigns = campaigns.filter((campaign) =>
            campaign.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredCampaigns);
    };


    // ai

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) {
                return setOpenError(true), setError("Install MetMask")
            };

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("Account Not Found");
            }
        } catch (error) {
            console.log("Somthing wrong while connection to wallet");
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
        getCampaigns();
    }, []);


    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                return console.log("Install MetaMask");
            };

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error while connecting to wallet");
        }
    };


    const deleteCampaign = async (pId) => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
    
        try {
          const transaction = await contract.deleteCampaign(pId);
          await transaction.wait();
          console.log("Campaign deleted successfully", transaction);
          window.location.reload();
    
          // Refresh campaigns list after deletion
          await getCampaigns();
        } catch (error) {
          console.log("Campaign deletion failed", error);
        }
      };

    return (
        <CrowdFundingContext.Provider
            value={{
                titleData,
                currentAccount,
                setCurrentAccount,
                campaigns,
                setCampaigns,
                createCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations,
                connectWallet,
                searchCampaigns,
                searchResults,
                deleteCampaign, 
            }}>
            {children}
        </CrowdFundingContext.Provider>
    );
};