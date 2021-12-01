import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';
import { useCampaign } from '../../../contexts/CampaignProvider';

const CampaignDeleteCard = () => {
  const { campaign, setCampaign } = useCampaign();

  return (
    <Wrapper>
      <Card class={style}>
        <div>Owner: {campaign.gameMaster}</div>
        <Button variant="contained" disableElevation>
          Delete Campaign
        </Button>
      </Card>
    </Wrapper>
  );
};

export default CampaignDeleteCard;

const style = `
  
`;

const button = `
  bg-red-200
  border-solid
  border-2
  border-red-400
  rounded-md
  w-auto
`;
