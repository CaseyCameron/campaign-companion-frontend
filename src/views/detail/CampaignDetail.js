import React from 'react';
import Loading from '../../components/loading/Loading';
import NpcCard from '../../components/layout/npcs/NpcCard';
import SearchBar from '../SearchBar';
import { useFetchNpcs } from '../../hooks/hooks';
import { useNpcs } from '../../contexts/CampaignProvider';
import { useParams } from 'react-router-dom';

const CampaignDetail = () => {
  const { id } = useParams();
  const { loading } = useFetchNpcs(id);
  const { npcs } = useNpcs();

  if (loading) return <Loading />;
  return (
    <>
      <div className={searchStyle}>
        <SearchBar />
      </div>
      <div className={npcStyle}>
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
