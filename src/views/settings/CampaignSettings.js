import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CampaignDeleteCard } from '../../components/layout/campaigns';
import { deleteCampaign, getCampaignById } from '../../services/routes/routes';
import { useCampaign } from '../../contexts/CampaignProvider';
import { Card, Wrapper } from '../../components/UI';
import {
  PlayerAddCard,
  PlayerDeleteCard,
  PlayerCard,
  PlayerPermissionsCard,
} from '../../components/layout/players';
import CampaignForm from '../../components/forms/CampaignForm';

const CampaignSettings = () => {
  const { campaign, setCampaign } = useCampaign();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaignById(id);
      setCampaign(res);
    };
    fetchData();
  }, [id]);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleDelete = () => {
    if (value === campaign.gameMaster) deleteCampaign(campaign.id);
    navigate('/');
  };

  const handleOpen = () => {
    if (value === campaign.gameMaster) {
      setOpen(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <Wrapper class={wrapperStyle}>
      <Card class={cardStyles}>
        <div class={title}>Edit Campaign</div>
        <CampaignForm campaign={campaign} addForm={false} />
      </Card>
      <Card class={cardStyles}>
        <div class={title}>Danger Zone</div>
        <CampaignDeleteCard 
          campaign={campaign}
          error={error}
          open={open}
          setOpen={setOpen}
          value={value}
          handleChange={handleChange}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      </Card>
      <Card class={cardStyles}>
        <div class={title}>Players</div>
        <PlayerCard />
        <PlayerAddCard />
        <PlayerDeleteCard />
      </Card>
      <Card class={cardStyles}>
        <div class={title}>Player Permissions</div>
        <PlayerPermissionsCard />
      </Card>
    </Wrapper>
  );
};

export default CampaignSettings;

const cardStyles = `
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  w-72
  sm:w-80
  m-3
  p-2
`;

const title = `
  bg-gray-100
  rounded
  w-full
`;

const wrapperStyle = `
  flex
  flex-wrap
  justify-center
`;
