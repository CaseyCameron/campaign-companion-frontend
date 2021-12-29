import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NpcCard from '../../components/layout/npcs/NpcCard';
import Loading from '../../components/loading/Loading';
import { getNpcById } from '../../services/routes/routes';

const NpcDetail = () => {
  const [npc, setNpc] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNpcById(id);
      setNpc(res);
      setLoading(false);
    };
    fetchData();
  }, [id, setNpc]);

  if (loading) return <Loading />;
  return <NpcCard {...npc} key={npc.id} update={true} />;
};

export default NpcDetail;
