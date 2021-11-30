import React, { useEffect, useState } from 'react'
import Loading from '../components/loading/Loading.js';
import NpcCard from '../components/layout/npcs/NpcCard.js';
import { getNpcs } from '../services/routes/routes';

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
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <div class="m-2 flex">
        {npcs.map((npc) => {
          return <NpcCard {...npc} key={npc.id} />;
        })}
      </div>
    </>
  );
};

export default Npcs
