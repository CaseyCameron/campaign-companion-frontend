import React from 'react';
import ConfirmModalDialog from '../../modals/ConfirmModalDialog';
import { Alert, Stack } from '@mui/material';
import { Button, TextField } from '@material-ui/core/';
import { Card, Wrapper } from '../../UI';

const CampaignDeleteCard = ({
  campaign,
  error,
  open,
  setOpen,
  value,
  handleChange,
  handleOpen,
  handleDelete,
}) => {
  return (
    <Wrapper>
      <Card class={style}>
        <div className={owner}>Owner: <span className="font-serif">{campaign.gameMaster}</span></div>
        <div className={del}>
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
        <Button className={button} variant="contained" onClick={handleOpen}>
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
  flex
  flex-col
  justify-center
  m-2
  p-2
`;

const owner = `
  m-4
`;

const del = `
  m-4
  text-sm
`;

const button = `

`
