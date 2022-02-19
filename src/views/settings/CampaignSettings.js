import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CampaignDeleteCard } from '../../components/layout/campaigns';
import CampaignForm from '../../components/forms/CampaignForm';
import { deleteCampaign, getCampaignById } from '../../services/routes/campaigns';
import { useCampaigns } from '../../contexts/CampaignProvider';
import { Card, Wrapper } from '../../components/UI';
import {
  PlayerCard,
  PlayerPermissionsCard,
} from '../../components/layout/players';

const CampaignSettings = () => {
  const { campaigns, setCampaigns } = useCampaigns();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaignById(id);
      setCampaigns(res);
    };
    fetchData();
  }, [id, setCampaigns]);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleDelete = () => {
    if (value === campaigns.gameMaster) deleteCampaign(campaigns.id);
    navigate('/');
  };

  const handleOpen = () => {
    if (value === campaigns.gameMaster) {
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
        <div className={title}>Edit Campaign</div>
        <CampaignForm campaign={campaigns} addForm={false} />
      </Card>
      <Card class={cardStyles}>
        <div className={title}>Danger Zone</div>
        <CampaignDeleteCard 
          campaign={campaigns}
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
        <div className={title}>Players</div>
        <PlayerCard />
      </Card>
      <Card class={cardStyles}>
        <div className={title}>Player Permissions</div>
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
  shadow
  rounded 
  w-72
  sm:w-80
  m-3
  p-2
  bg-white
`;

const title = `
  bg-gray-100
  rounded
  w-full
  px-2
`;

const wrapperStyle = `
  flex
  flex-wrap
  justify-center
`;
