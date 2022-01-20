import React from 'react';
import { makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import { useSearch } from '../../hooks/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
  },
  link: {
    cursor: 'pointer',
  },
}));

const Search = ({ type, data }) => {
  const classes = useStyles();
  const { 
    input, 
    selected, 
    handleChange, 
    handleSelectChange 
  } = useSearch({ data });

  return (
    <>
      <form class={classes.root}>
        <TextField
          label={`Search ${type}`}
          variant="outlined"
          value={input || ''}
          onChange={handleChange}
          onFocus={(event) => {
            event.target.select();
          }}
        />
        {type === 'npcs' && (
          <Select
            id="select"
            label="Selected"
            defaultValue="name"
            value={selected}
            variant="outlined"
            onChange={handleSelectChange}
          >
            <MenuItem value="name">name</MenuItem>
            <MenuItem value="race">race</MenuItem>
            <MenuItem value="alignment">alignment</MenuItem>
            <MenuItem value="description">description</MenuItem>
            <MenuItem value="affiliation">affiliation</MenuItem>
            <MenuItem value="status">status</MenuItem>
            <MenuItem value="campaignId">campaign</MenuItem>
          </Select>
        )}
        {type === 'campaigns' && (
          <Select
            id="select"
            label="Selected"
            defaultValue="name"
            value={selected}
            variant="outlined"
            onChange={handleSelectChange}
          >
            <MenuItem value="name">name</MenuItem>
            <MenuItem value="description">description</MenuItem>
          </Select>
        )}
      </form>
    </>
  );
};

export default Search;
