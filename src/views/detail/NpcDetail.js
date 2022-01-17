import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NpcForm from '../../components/forms/NpcForm';
import Loading from '../../components/loading/Loading';
import { deleteNpc, getNpcById } from '../../services/routes/routes';
import { Wrapper } from '../../components/UI';
import NpcDeleteCard from '../../components/layout/npcs/NpcDeleteCard';
import SearchBar from '../SearchBar';

const NpcDetail = () => {
  const [npc, setNpc] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNpcById(id);
      setNpc(res);
      setLoading(false);
    };
    fetchData();
  }, [id, setNpc]);

  const handleDelete = () => {
    deleteNpc(id);
    navigate('/npcs');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (loading) return <Loading />;
  return (
    <>
    <Wrapper class={wrapperStyle}>
        <img className={imageStyle} src={npc.image} alt={npc.name} />
        <div>
          <NpcForm npc={npc} key={npc.id} />
          <NpcDeleteCard 
            open={open}
            setOpen={setOpen}
            handleDelete={handleDelete}
            handleOpen={handleOpen}
          />
        </div>
    </Wrapper>
    </>
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

