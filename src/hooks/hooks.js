import { useEffect, useState } from 'react';
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

export { useFetchCampaigns, useFetchNpcs };
