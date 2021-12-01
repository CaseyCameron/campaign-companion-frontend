import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';
import { useCampaign } from '../../../contexts/CampaignProvider';

const CampaignDeleteCard = () => {
  const { campaign, setCampaign } = useCampaign();

  return (
    <Wrapper>
      <Card class={style}>
        <div class={owner}>Owner: {campaign.gameMaster}</div>
        <Button variant="contained" disableElevation>
          Delete Campaign
        </Button>
      </Card>
    </Wrapper>
  );
};

export default CampaignDeleteCard;

const style = `
  m-2
  p-2
`;

const owner = `
  m-4
`
