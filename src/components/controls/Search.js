import React, { useEffect, useState } from 'react';
import { makeStyles, Select, TextField } from '@material-ui/core';
import { useSetSearchItems } from '../../contexts/CampaignProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    }
  },
  link: {
    cursor: 'pointer',
  },
}));

const Search = ({ type, data }) => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  //const [list, setList] = useState([]);
  const [selected, setSelected] = useState('name');
  const { searchItems, setSearchItems } = useSetSearchItems();

  useEffect(() => {
    const regEx = new RegExp(
      input
        .split('')
        .map((i) => i.toLowerCase())
        .join(''),
      'i'
    );
    if (!input) setSearchItems(data);
    if (input) {
      const filteredData = data.filter((i) => {
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
      setSearchItems(filteredData);
    } else {
      setSearchItems(data);
    }
    console.log(searchItems);
  }, [data, input, selected]);

  const handleChange = ({ target }) => {
    setInput(target.value);
    console.log('Searching...');
  };

  const handleSelectChange = ({ target }) => {
    setSelected(target.value);
  };

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
            labelId="selector"
            label="Selected"
            defaultValue="name"
            value={selected}
            variant="outlined"
            onChange={handleSelectChange}
            >
            <option value="name">name</option>
            <option value="race">race</option>
            <option value="alignment">alignment</option>
            <option value="description">description</option>
            <option value="affiliation">affiliation</option>
            <option value="status">status</option>
          </Select>
        )}
        {type === 'campaigns' && (
          <Select
          id="select"
          labelId="selector"
          label="Selected"
          defaultValue="name"
          value={selected}
          variant="outlined"
          onChange={handleSelectChange}
          >
            <option value="name">name</option>
            <option value="description">description</option>
          </Select>
        )}
      </form>
    </>
  );
};

export default Search;
