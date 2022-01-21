import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useSearch } from '../../hooks/hooks';
import { useSearchStyles } from '../../hooks/styles-hooks';

const Search = ({ type, data }) => {
  const classes = useSearchStyles();
  const { input, selected, handleChange, handleSelectChange } = useSearch({
    data,
  });

  return (
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
  );
};

export default Search;
