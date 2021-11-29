import React, { useEffect } from 'react';
import CampaignCard from '../components/layout/campaigns/CampaignCard';
import { getCampaigns } from '../services/routes/routes';
import { useCampaign } from '../contexts/CampaignProvider';
import { Wrapper } from '../components/UI';

const Campaigns = () => {
  const { campaign, setCampaign } = useCampaign();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns();
      setCampaign(res);
    };
    fetchData();
  }, []);

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
