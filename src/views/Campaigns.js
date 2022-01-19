import React from 'react';
import CampaignCard from '../components/layout/campaigns/CampaignCard';
import Loading from '../components/loading/Loading';
import { SearchBar } from '.';
import { useFetchCampaigns } from '../hooks/hooks';
import { useSetSearchItems } from '../contexts/CampaignProvider';

const Campaigns = () => {
  const [, loading] = useFetchCampaigns();
  const { searchItems, } = useSetSearchItems();

  if (loading) return <Loading />;
  return (
    <>
      <div class={searchStyle}>
        <SearchBar />
      </div>
    <div class={cpStyle}>
      {searchItems.map((campaign) => (
        <CampaignCard {...campaign} key={campaign.id} />
      ))}
    </div>
    </>
  );
};

export default Campaigns;

const cpStyle = `
  flex
  flex-wrap
  m-2
`;

const searchStyle = `
  flex
  justify-between
`
