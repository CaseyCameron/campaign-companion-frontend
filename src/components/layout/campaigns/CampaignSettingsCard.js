import React from 'react';
import CampaignForm from './CampaignForm';
import { Card, Wrapper } from '../../UI';
import { CampaignDeleteCard } from '.';
import { PlayerAddCard, PlayerDeleteCard, PlayerCard, PlayerPermissionsCard } from '../players/';
import { useCampaign } from '../../../contexts/CampaignProvider';

const CampaignSettingsCard = () => {
  const { campaign, setCampaign } = useCampaign();

  return (
    <Wrapper class={wrapperStyle}>
      <Card class={cardStyles}>
        <div>Edit Campaign</div>
        <CampaignForm campaign={campaign} />
      </Card>
      <Card class={cardStyles}>
        <div>Danger Zone</div>
        <CampaignDeleteCard />
      </Card>
      <Card class={cardStyles}>
        <div>Players</div>
        <PlayerCard />
        <PlayerAddCard />
        <PlayerDeleteCard />
      </Card>
      <Card class={cardStyles}>
        <div>Player Permissions</div>
        <PlayerPermissionsCard />
      </Card>
    </Wrapper>
  );
};

export default CampaignSettingsCard;

const cardStyles = `
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  max-w-sm 
  m-3
`;

const wrapperStyle = `
  flex
  flex-wrap
`;
