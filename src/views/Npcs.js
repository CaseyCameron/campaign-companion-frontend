import React, { useEffect, useState } from 'react'
import Loading from '../components/loading/Loading.js';
import NpcCard from '../components/layout/npcs/NpcCard.js';
import { getNpcs } from '../services/routes/routes';
import Wrapper from '../components/UI/Wrapper';

const Npcs = () => {
  const [loading, setLoading] = useState(true);
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNpcs();
      setNpcs(res);
      setLoading(false);
    };

    fetchData();
  }, [npcs, setNpcs]);

  if (loading) return <Loading />;
  return (
    <Wrapper class={wrapperStyle}>
        {npcs.map((npc) => {
          return <NpcCard {...npc} key={npc.id} update={false}/>;
        })}
    </Wrapper>
  );
};

export default Npcs;

const wrapperStyle = `
  flex
  flex-wrap
  m-2
`;
