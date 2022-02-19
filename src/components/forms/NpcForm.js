import React from 'react';
import Loading from '../loading/Loading';
import { useForm, Controller } from 'react-hook-form';
import { useNpcForm } from '../../hooks/form-hooks';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useStyles } from '../../hooks/styles-hooks';

const NpcForm = ({ npc, addForm, handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, reset, setValue, control } = useForm();
  const { campaigns, loading, onSubmit, selected, setSelected } = useNpcForm(
    npc,
    addForm,
    handleClose,
    setValue
  );

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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            multiline
            minRows="2"
            value={value || ''}
            onChange={onChange}
            onFocus={(event) => {
              event.target.select();
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="text"
            size="small"
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
        size="small"
      >
        <MenuItem value={null}>None</MenuItem>
        {campaigns.map((campaign) => (
          <MenuItem key={campaign.id} value={campaign.id}>
            {campaign.name}
          </MenuItem>
        ))}
      </TextField>
      <div className="buttonDiv">
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
