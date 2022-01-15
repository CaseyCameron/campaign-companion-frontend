import { useEffect, useState } from 'react';
import { getCampaigns } from '../services/routes/routes';
import { useCampaign } from '../contexts/CampaignProvider';

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

export { useFetchCampaigns };
