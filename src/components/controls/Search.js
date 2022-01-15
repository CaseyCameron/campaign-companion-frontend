import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

const Search = (type) => {
  const classes = useStyles();
  const { handleSubmit, setValue, control } = useForm();

  const onSubmit = () => {
    console.log('Searching...');
  };

  return (
    <>
      <form class={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={`Search ${type}'s`}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={`${type}'s`}
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
        <Button type="submit" variant={'contained'}>
          Search
        </Button>
      </form>
    </>
  );
};

export default Search;
