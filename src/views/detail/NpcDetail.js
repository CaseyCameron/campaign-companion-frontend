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
    <Wrapper class={wrapperStyle}>
        <img className={imageStyle} src={npc.image} alt={npc.name} />
        <div>
          <NpcForm npc={npc} key={npc.id} />
          <NpcDeleteCard id={npc.id} />
        </div>
    </Wrapper>
  );
};

export default NpcDetail;

const imageStyle = `
  max-w-12
  max-h-24
  m-5
  border-2
  border-solid
  shadow-lg
`

const wrapperStyle = `
  flex
  justify-center
`;

