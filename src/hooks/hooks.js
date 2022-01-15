import { useEffect, useState } from 'react';
import { getCampaigns, getNpcs } from '../services/routes/routes';
import { useCampaign, useNpcs } from '../contexts/CampaignProvider';

const useFetchCampaigns = () => {
  const { campaign, setCampaign } = useCampaign();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns();
      setCampaign(res);
      setLoading(false);
    };
    fetchData();
  },[]);

  return [campaign, loading];
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
