import React, { useEffect, useState } from 'react';
import { Button, makeStyles, Select, TextField } from '@material-ui/core';

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

const Search = ({ type, npcs }) => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState('name');

  useEffect(() => {
    const regEx = new RegExp(
      input
        .split('')
        .map((i) => i.toLowerCase())
        .join(''),
      'i'
    );
    if (!input) setList(npcs);
    if (input) {
      const filteredNpcs = npcs.filter((i) => {
        const lowerCased = i[selected]
          .split('')
          .map((i) => i.toLowerCase())
          .join('');
        if (lowerCased.match(regEx)) {
          return i;
        } else {
          return null;
        }
      });
      setList(filteredNpcs);
    } else {
      setList(npcs);
    }
    console.log(list);
  }, [input, selected, npcs]);

  const handleChange = ({ target }) => {
    setInput(target.value);
    console.log('Searching...');
  };

  const handleSelectChange = ({ target }) => {
    setSelected(target.value);
  };

  return (
    <>
      <form>
        <TextField
          label={`Search ${type}`}
          variant="outlined"
          value={input || ''}
          onChange={handleChange}
          onFocus={(event) => {
            event.target.select();
          }}
        />
        <Select
          labelId="selector"
          id="select"
          defaultValue="name"
          value={selected}
          label="Selected"
          onChange={handleSelectChange}
        >
          <option value="name">name</option>
          <option value="race">race</option>
          <option value="alignment">alignment</option>
          <option value="description">description</option>
          <option value="affiliation">affiliation</option>
          <option value="status">status</option>
        </Select>
        <Button type="submit" variant={'contained'}>
          Search
        </Button>
      </form>
    </>
  );
};

export default Search;
