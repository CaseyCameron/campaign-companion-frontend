import React, { useState } from 'react';
import { Alert, Stack } from '@mui/material';
import { deleteCampaign } from '../../../services/routes/routes';
import ConfirmModalDialog from '../../modals/ConfirmModalDialog';
import { useNavigate } from 'react-router';
import { useCampaign } from '../../../contexts/CampaignProvider';

import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';
import TextField from '@material-ui/core/TextField';

const CampaignDeleteCard = () => {
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const { campaign, setCampaign } = useCampaign();

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
        {error && (
          <Stack sx={{ width: '100%', marginBottom: '10px' }} spacing={2}>
            <Alert severity="error">Incorrect Game Master</Alert>
          </Stack>
        )}
        <Button variant="contained" onClick={handleOpen}>
          Delete Campaign
        </Button>
        <ConfirmModalDialog
          title="Delete Campaign?"
          open={open}
          setOpen={setOpen}
          onConfirm={handleDelete}
        />
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

