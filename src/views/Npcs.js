import React, { useEffect, useState } from 'react'
import Loading from '../components/loading/Loading.js';
import NpcCard from '../components/layout/npcs/NpcCard.js';
import { getNpcs } from '../services/routes/routes';
import { useNpcs } from '../contexts/CampaignProvider.js';
import { SearchBar } from './index';
import Wrapper from '../components/UI/Wrapper';

const Npcs = () => {
  const [loading, setLoading] = useState(true);
  const { npcs, setNpcs } = useNpcs();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNpcs();
      setNpcs(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <SearchBar />
      <Wrapper class={wrapperStyle}>
        {npcs.map((npc) => (
          <NpcCard {...npc} key={npc.id} />
        ))}
      </Wrapper>
    </>
  );
};

export default Npcs;

const wrapperStyle = `
  flex
  flex-wrap
  m-2
`;
