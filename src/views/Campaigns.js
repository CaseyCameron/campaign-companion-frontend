import React from 'react';
import CampaignCard from '../components/layout/campaigns/CampaignCard';
import Loading from '../components/loading/Loading';
import { SearchBar } from '.';
import { useAuth } from '../contexts/AuthProvider';
import { useFetchCampaigns } from '../hooks/hooks';
import { useSetSearchItems } from '../contexts/CampaignProvider';

const Campaigns = () => {
  const { user } = useAuth();
  const { loading } = useFetchCampaigns();
  const { searchItems } = useSetSearchItems();

  if (loading) return <Loading />;
  return (
    <>
      <div class={searchStyle}>
        <SearchBar />
      </div>
    <div class={cpStyle}>
      {searchItems.map((campaign) => (
        <CampaignCard {...campaign} key={campaign.id} user={user} />
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
  justify-center
`;

const searchStyle = `
  flex
  justify-between
`
