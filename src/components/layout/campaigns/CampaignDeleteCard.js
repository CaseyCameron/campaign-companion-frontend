import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';
import { deleteCampaign } from '../../../services/routes/routes';
import TextField from '@material-ui/core/TextField';
import { useCampaign } from '../../../contexts/CampaignProvider';

const CampaignDeleteCard = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState('');
  const { campaign, setCampaign } = useCampaign();

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleClick = () => {
    if (value === campaign.gameMaster) {
      console.log('deleting');
      deleteCampaign(campaign.id);
      navigate('/');
    } else {
      console.log('incorrect game master');
    }
  };

  return (
    <Wrapper>
      <Card class={style}>
        <div class={owner}>Owner: {campaign.gameMaster}</div>
        <div class={del}>
          To delete this campaign, type in the gameMaster email and hit 'DELETE
          CAMPAIGN'
          <TextField
            label="Game Master Email"
            variant="outlined"
            value={value}
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" disableElevation onClick={handleClick}>
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
`;

const del = `
  m-4
`;

