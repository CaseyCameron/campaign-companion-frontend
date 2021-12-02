import React, { useEffect, useState } from 'react';
import CampaignCard from '../components/layout/campaigns/CampaignCard';
import { getCampaigns } from '../services/routes/routes';
import Loading from '../components/loading/Loading';
import { useCampaign } from '../contexts/CampaignProvider';
import { Wrapper } from '../components/UI';

const Campaigns = () => {
  const [loading, setLoading] = useState(true);
  const { campaign, setCampaign } = useCampaign();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns();
      setCampaign(res);
      setLoading(false);
    };
    fetchData();
  }, [campaign]);

  if (loading) return <Loading />;
  return (
    <Wrapper class={wrapperStyle}>
      {campaign.map((campaign) => (
        <CampaignCard {...campaign} key={campaign.id} />
      ))}
    </Wrapper>
  );
};

export default Campaigns;

const wrapperStyle = `
  flex
  flex-wrap
  m-2
`;
