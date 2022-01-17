import React from 'react'
import Loading from '../components/loading/Loading.js';
import NpcCard from '../components/layout/npcs/NpcCard.js';
import { useFetchNpcs } from '../hooks/hooks.js';
import { SearchBar } from './index';
import { useSetSearchItems } from '../contexts/CampaignProvider.js';

const Npcs = () => {
  const [npcs, loading] = useFetchNpcs();
  const { searchItems, setSearchItems } = useSetSearchItems();

  if (loading) return <Loading />;
  return (
    <>
      <div class={searchStyle}>
        <SearchBar />
      </div>
      <div class={npcStyle}>
        {searchItems.map((npc) => (
          <NpcCard {...npc} key={npc.id} />
        ))}
      </div>
    </>
  );
};

export default Npcs;

const npcStyle = `
  flex
  flex-wrap
  m-2
`;

const searchStyle = `
  flex
  justify-between
`
