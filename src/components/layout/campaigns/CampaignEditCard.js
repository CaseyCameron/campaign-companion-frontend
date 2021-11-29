import React from 'react';
import CampaignForm from './CampaignForm';
import { Card, Wrapper } from '../../UI/';
import { useCampaign } from '../../../contexts/CampaignProvider';

const CampaignEditCard = () => {
  const { campaign, setCampaign } = useCampaign();

  return (
    <Wrapper class={wrapperStyle}>
      <Card class={cardStyles}>
        <div>Edit Campaign</div>
        <CampaignForm campaign={campaign} />
      </Card>
      <Card class={cardStyles}>
        <div>Danger Zone</div>
      </Card>
      <Card class={cardStyles}>
        <div>Players</div>
      </Card>
      <Card class={cardStyles}>
        <div>Player Permissions</div>
      </Card>
    </Wrapper>
  );
};

export default CampaignEditCard;

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
