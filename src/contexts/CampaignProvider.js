import React, { createContext, useContext, useState } from 'react'

const CampaignCompanionContext = createContext()

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [npcs, setNpcs] = useState([]);

  const value = {
    campaigns,
    setCampaigns,
    npcs,
    setNpcs,
  };

  return (
    <CampaignCompanionContext.Provider value={value}>
      {children}
    </CampaignCompanionContext.Provider>
  );
};

export const useCampaigns = () => {
  const { campaigns, setCampaigns } = useContext(CampaignCompanionContext);

  return { campaigns, setCampaigns };
};

export const useNpcs = () => {
  const { npcs, setNpcs } = useContext(CampaignCompanionContext);

  return { npcs, setNpcs };
};
