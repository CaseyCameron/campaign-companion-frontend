import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { updateCampaign } from '../../../services/routes/routes';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
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

const CampaignForm = ({ campaign, handleClose }) => {
  const classes = useStyles()
  const { handleSubmit, reset, control } = useForm()

  const onSubmit = (data) => {
    updateCampaign(campaign.id, data);
  };

  return (
    <form class={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        placeholder={campaign.name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label='name'
            placeholder={campaign.name}
            variant="outlined"
            value={value}
            onChange={onChange}
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
        placeholder={campaign.description}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="description"
            placeholder={campaign.description}
            variant="outlined"
            value={value}
            onChange={onChange}
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
        placeholder={campaign.image}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="image"
            placeholder={campaign.image}
            variant="outlined"
            value={value}
            onChange={onChange}
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
        placeholder={campaign.gameMaster}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="game master"
            placeholder={campaign.gameMaster}
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
          />
        )}
        rules={{ required: 'Game Master required' }}
      />
      <div className="button div">
        <Button type="submit" variant={'outlined'}>
          Submit
        </Button>
        <Button onClick={() => reset(campaign)} variant={'outlined'}>
          Reset
        </Button>
      </div>
    </form>
  );
}

export default CampaignForm
