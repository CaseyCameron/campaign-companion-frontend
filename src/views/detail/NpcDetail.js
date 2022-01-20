import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteNpc, getNpcById } from '../../services/routes/routes';
import Loading from '../../components/loading/Loading';
import NpcForm from '../../components/forms/NpcForm';
import NpcDeleteCard from '../../components/layout/npcs/NpcDeleteCard';
import { Wrapper } from '../../components/UI';

const NpcDetail = () => {
  const { user } = useAuth();
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
      {!user && <h1>Please 
        <Link 
          to={'/auth'}
          class={"text-blue-300"}
          state={{ fromDashboard: true }}
          > login</Link> to edit Npcs</h1>}
      {user && (
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
      )}
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

