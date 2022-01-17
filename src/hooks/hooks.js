import { useEffect, useReducer, useState } from 'react';
import { getCampaigns, getNpcs } from '../services/routes/routes';
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

const useFetchNpcs = () => {
  const { npcs, setNpcs } = useNpcs();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNpcs();
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
