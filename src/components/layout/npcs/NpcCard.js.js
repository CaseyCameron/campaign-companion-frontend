import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

export default function NpcCard({
  id,
  name,
  race,
  alignment,
  description,
  image,
  affiliation,
  status,
  update
}, ) {
  return (
    <Link to={`/npcs/detail/${id}`}>
      <Card class={styles}>
        <div class={nameStyle}>{name}</div>
        <img class={imageStyle} src={image} alt={name} />
        <div class={sub}>
          <div class={raceStyle}>Race: {race}</div>
          <div>Alignment: {alignment}</div>
          <div class={desc}>Description: {description}</div>
          <div>Affiliation: {affiliation}</div>
          <div>Status: {status}</div>
        </div>
        {update &&
          <div class={buttons}>
            <Button className={button}>Edit</Button>
            <Button className={button}>Delete</Button>
          </div>
        }
      </Card>
    </Link>
  );
}

const styles = `
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  w-72
  sm:w-80
  h-92
  m-3
  text-xs
  overflow-y-auto
  shadow-lg
`;

const sub = `
  flex
  flex-col
  text-left
`;

const desc = `
  max-h-12
  overflow-auto
`;

const imageStyle = `
  h-44
  max-w-xs
  rounded
  object-fit
  shadow-lg
`;

const nameStyle = `
  truncate
  p-1
`;

const raceStyle = `
  list-none
  indent-0.5
`;

const buttons = `
  m-4
`

const button = `
  shadow-md
`
