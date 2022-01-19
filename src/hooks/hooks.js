import { useEffect, useReducer, useState } from 'react';
import { getCampaignNpcs, getCampaigns, getNpcs } from '../services/routes/routes';
import { useCampaigns, useNpcs } from '../contexts/CampaignProvider';

const useFetchCampaigns = () => {
  const { campaigns, setCampaigns } = useCampaigns();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns();
      setCampaigns(res);
      setLoading(false);
    };
    fetchData();
  },[]);

  return [campaigns, loading];
};

const useFetchNpcs = (id) => {
  const { npcs, setNpcs } = useNpcs();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let res;
    const fetchData = async () => {
      if(!id) res = await getNpcs();
      if(id) res = await getCampaignNpcs(id);
      setNpcs(res);
      setLoading(false);
    }
    fetchData();
  },[]);
  
  return [npcs, loading];
};

// const searchReducer = (state, action) => {
//   switch(action.type) {
//     case 'SEARCH_CAMPAIGNS':
//       return [...state.campaigns];
//     case 'SEARCH_NPCS':
//       return [...state.npcs];
//     default:
//       throw new Error('Something went wrong');
//   }
// };

export { useFetchCampaigns, useFetchNpcs };
