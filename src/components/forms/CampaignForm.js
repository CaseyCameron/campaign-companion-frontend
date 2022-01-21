import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import { useForm, Controller } from 'react-hook-form';
import { addCampaign, updateCampaign } from '../../services/routes/routes';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useCampaigns } from '../../contexts/CampaignProvider';
import { useStyles } from '../../hooks/styles-hooks';

const CampaignForm = ({ campaign, addForm, handleClose }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const { setCampaigns } = useCampaigns();

  const { handleSubmit, reset, setValue, control } = useForm();

  useEffect(() => {
    if (campaign)
      Object.entries(campaign).forEach(([key, value]) => {
        setValue(key, value);
      });
    setLoading(false);
  }, [campaign, setValue]);

  const onSubmit = async (formData) => {
    if (!addForm) updateCampaign(campaign.id, formData);
    if (addForm) {
      const [addedCampaign] = await addCampaign(formData);
      setCampaigns(prevState => [...prevState, addedCampaign]);
      handleClose(true);
    }

  };

  if (loading) return <Loading />;
  return (
    <form class={classes.root} onSubmit={handleSubmit(onSubmit)}>
      {addForm && <h1>Add a Campaign</h1>}
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="name"
            variant="outlined"
            value={value}
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
        name="description"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="description"
            variant="outlined"
            value={value}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
        rules={{ required: 'Description required' }}
      />
      <Controller
        name="image"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="image"
            variant="outlined"
            value={value}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
        rules={{ required: 'Image required' }}
      />
      <Controller
        name="gameMaster"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="game master"
            variant="outlined"
            value={value}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
        rules={{ required: 'Game Master required' }}
      />
      <div className="button div">
        <Button type="submit" variant={'contained'}>
          Submit
        </Button>
        <Button
          onClick={() => reset(campaign)}
          variant={'contained'}
          disableElevation
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default CampaignForm;
