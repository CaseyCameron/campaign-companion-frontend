import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import { useForm, Controller } from 'react-hook-form';
import { addNpc } from '../../services/routes/routes';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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

const NpcForm = ({ npc, addForm }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const { handleSubmit, reset, setValue, control } = useForm();

  useEffect(() => {
    if (npc)
      Object.entries(npc).forEach(([key, value]) => {
        setValue(key, value);
      });

    setLoading(false);
  }, [npc]);

  const onSubmit = (formData) => {
    console.log(formData);
    if (!addForm)
      if (addForm)
        //update npc
        console.log('adding npc');
    addNpc(formData);
  };

  if (loading) return <Loading />;
  return (
    <form class={classes.root} onSubmit={handleSubmit(onSubmit)}>
      {addForm && <h1>Add an Npc</h1>}
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
        name="Image"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Image"
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
      />
      <Controller
        name="race"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="race"
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
      />
      <Controller
        name="alignment"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="alignment"
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
      />
      <Controller
        name="affiliation"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="affiliation"
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
      />
      <Controller
        name="status"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="status"
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
      />
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
