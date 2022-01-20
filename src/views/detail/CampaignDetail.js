import React from 'react';
import Loading from '../../components/loading/Loading';
import NpcCard from '../../components/layout/npcs/NpcCard';
import SearchBar from '../SearchBar';
import { useParams } from 'react-router-dom';
import { useNpcs } from '../../contexts/CampaignProvider';
import { useFetchNpcs } from '../../hooks/hooks';

const CampaignDetail = () => {
  const { id } = useParams();
  const [, loading] = useFetchNpcs(id);
  const { npcs } = useNpcs();


  if (loading) return <Loading />;
  return (
    <>
    <div class={searchStyle}>
      <SearchBar />
    </div>
    <div class={npcStyle}>
      {npcs.length === 0 && <h1>This campaign has no npcs yet.</h1>}
        {npcs.map((npc) => {
          return <NpcCard {...npc} key={npc.name} />;
        })}
    </div>
    </>
  );
};

export default CampaignDetail;

const npcStyle = `
  flex
  flex-wrap
  m-2
`;

const searchStyle = `
  flex
  justify-between
`
