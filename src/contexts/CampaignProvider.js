import React, { createContext, useContext, useReducer, useState } from 'react';
// import { searchReducer } from '../hooks/hooks';

const CampaignCompanionContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [npcs, setNpcs] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  // const [state, dispatch] = useReducer(searchReducer);

  // const searchCampaigns = (campaigns) => {
  //   const filteredCampaigns = [...campaigns];
  //   dispatch({
  //     type: "SEARCH_CAMPAIGNS",
  //     payload: filteredCampaigns
  //   });
  // };

  const value = {
    // searchCampaigns,
    campaigns,
    setCampaigns,
    npcs,
    setNpcs,
    searchItems,
    setSearchItems
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

export const useSetSearchItems = () => {
  const { searchItems, setSearchItems } = useContext(CampaignCompanionContext);

  return { searchItems, setSearchItems };
}
