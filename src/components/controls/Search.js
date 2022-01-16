import React, { useEffect, useState } from 'react';
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

const Search = ({ type, npcs }) => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [key, setKey] = useState('');

  useEffect(() => {
    const regEx = new RegExp(input.split('').map(i => i.toLowerCase()).join(''), 'i');
    if (!input) setList(npcs);
    if (input) {
      const filteredNpcs = npcs.filter(i => {
        const lowerCased = i[key].split('').map(i => i.toLowerCase()).join('');
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
  },[input, key, npcs])

  const handleChange = ({ target }) => {
    setInput(target.value)
    console.log('Searching...');
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
        <Button type="submit" variant={'contained'}>
          Search
        </Button>
      </form>
    </>
  );
};

export default Search;
