import React from 'react';
import CampaignCard from '../components/layout/campaigns/CampaignCard';
import Loading from '../components/loading/Loading';
import { SearchBar } from '.';
import { Wrapper } from '../components/UI';
import { useFetchCampaigns } from '../hooks/hooks';

const Campaigns = () => {
  const [campaign, loading] = useFetchCampaigns();

  if (loading) return <Loading />;
  return (
    <Wrapper class={wrapperStyle}>
      <div class={search}>
        <SearchBar />
      </div>
    <div class={cpStyle}>
      {campaign.map((campaign) => (
        <CampaignCard {...campaign} key={campaign.id} />
      ))}
    </div>
    </Wrapper>
  );
};

export default Campaigns;

const cpStyle = `
  flex
  flex-wrap
  m-2
`;

const search = `
  flex
  justify-between
`

const wrapperStyle= `

`
