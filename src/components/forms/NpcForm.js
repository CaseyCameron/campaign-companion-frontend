import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import { useForm, Controller } from 'react-hook-form';
import { addNpc, updateNpc } from '../../services/routes/routes';
import { useCampaigns, useNpcs } from '../../contexts/CampaignProvider';

import Button from '@material-ui/core/Button';
import { makeStyles, MenuItem, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  link: {
    cursor: 'pointer',
  },
}));

const NpcForm = ({ addForm, handleClose, npc }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const { setNpcs } = useNpcs();
  const { campaigns, } = useCampaigns();
  const { handleSubmit, reset, setValue, control } = useForm();

  useEffect(() => {
    if (npc) {
      setSelected(npc.campaignId);
      Object.entries(npc).forEach(([key, value]) => {
        if (key !== 'campaignId' && key !== 'userId') {
          setValue(key, value);
        } else if (key === 'campaignId' && value !== null) {
          const campaignName = campaigns.find(
            (campaign) => campaign.id === value
          );
          setValue(key, campaignName.name);
        } else if (key === 'campaignId' && value === null) {
          setValue(key, null);
        }
      });
    }
    setLoading(false);
  }, [campaigns, npc, setValue]);

  const onSubmit = async (formData) => {
    if (!addForm) {
      updateNpc(npc.id, formData, selected);
    }

    if (addForm) {
      const [addedNpc] = await addNpc(formData, selected);
      setNpcs((prevState) => [...prevState, addedNpc]);
      handleClose(true);
    }
  };

  if (loading) return <Loading />;
  return (
    <form class={classes.root} onSubmit={handleSubmit(onSubmit)}>
      {addForm ? <h1>Add an Npc</h1> : <h1>Update an Npc</h1>}
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="name"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
        rules={{ required: 'Name required' }}
      />
      <Controller
        name="image"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="image"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
      />
      <Controller
        name="race"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="race"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
      />
      <Controller
        name="alignment"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="alignment"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="description"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
      />
      <Controller
        name="affiliation"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="affiliation"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
      />
      <Controller
        name="status"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="status"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
      />
      <TextField
        select
        id="campaign"
        label="campaign"
        defaultValue=""
        value={selected}
        variant="outlined"
        onChange={(e) => setSelected(e.target.value)}
      >
        <MenuItem value={null}>None</MenuItem>
        {campaigns.map((campaign) => (
          <MenuItem key={campaign.id} value={campaign.id}>{campaign.name}</MenuItem>
        ))}
      </TextField>
      <div className="button div">
        <Button type="submit" variant={'contained'}>
          Submit
        </Button>
        <Button
          onClick={() => reset(npc)}
          variant={'contained'}
          disableElevation
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default NpcForm;
