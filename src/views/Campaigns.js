import React from 'react';
import CampaignCard from '../components/layout/campaigns/CampaignCard';
import Loading from '../components/loading/Loading';
import { Wrapper } from '../components/UI';
import { useFetchCampaigns } from '../hooks/hooks';

const Campaigns = () => {
  const [campaign, loading] = useFetchCampaigns();

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
