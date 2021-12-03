import React, { useEffect, useState } from 'react';
import { getCampaignNpcs } from '../../services/routes/routes';
import Loading from '../../components/loading/Loading';
import NpcCard from '../../components/layout/npcs/NpcCard.js';
import { useParams } from 'react-router-dom';
import { useNpcs } from '../../contexts/CampaignProvider';
import { Wrapper } from '../../components/UI';

const CampaignDetail = () => {
  const [loading, setLoading] = useState(true);
  const { npcs, setNpcs } = useNpcs();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaignNpcs(id);
      setNpcs(res);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  return (
    <Wrapper class={wrapperStyle}>
      {npcs.length === 0 && <h1>This campaign has no npcs yet.</h1>}
        {npcs.map((npc) => {
          return <NpcCard {...npc} key={npc.name} />;
        })}
    </Wrapper>
  );
};

export default CampaignDetail;

const wrapperStyle = `
  flex
  flex-wrap
  m-2
`;
