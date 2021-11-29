import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
  console.log(campaign);
  const classes = useStyles()
  const { handleSubmit, reset, control } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return(
    <form class={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        name='name'
        control={control}
        defaultValue=''
        placeholder={campaign.name}
      	render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
            placeholder={campaign.name}
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="text"
					/>
				)}
        rules={{ required: 'Name required'}}
      />
      <Controller 
        name='description'
        control={control}
        defaultValue=''
        placeholder={campaign.description}
      	render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
            placeholder={campaign.description}
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="text"
					/>
				)}
        rules={{ required: 'Description required'}}
      />
      <Controller 
        name='image'
        control={control}
        defaultValue=''
        placeholder={campaign.image}
      	render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
            placeholder={campaign.image}
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="text"
					/>
				)}
        rules={{ required: 'Image required'}}
      />
      <Controller 
        name='gameMaster'
        control={control}
        defaultValue=''
        placeholder={campaign.gameMaster}
      	render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
            placeholder={campaign.gameMaster}
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="text"
					/>
				)}
        rules={{ required: 'Game Master required'}}
      />
      <Button type='submit'></Button>
      <Button onClick={() => reset()} variant={'outlined'}>Reset</Button>
    </form>
  )
}

export default CampaignForm
