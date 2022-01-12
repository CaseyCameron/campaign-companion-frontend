import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import NpcCard from '../../components/layout/npcs/NpcCard';
import NpcForm from '../../components/forms/NpcForm';
import Loading from '../../components/loading/Loading';
import { getNpcById } from '../../services/routes/routes';
import { Wrapper } from '../../components/UI';
import NpcDeleteCard from '../../components/layout/npcs/NpcDeleteCard';

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
  return (
    <Wrapper>
      <NpcForm npc={npc} key={npc.id} update={true} />
      <NpcDeleteCard id={npc.id} />
    </Wrapper>
  )
  // return (
  //   <NpcForm npc={npc} addForm={false} />
  //);
};

export default NpcDetail;
