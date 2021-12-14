import React from 'react'
import Card from '../../UI/Card'


export default function NpcCard({
  id,
  name,
  race,
  alignment,
  description,
  image,
  affiliation,
  status,
}) {
  return (
    <>
      <Card class={styles}>
        <div class={nameStyle}>{name}</div>
        <img class={imageStyle} src={image} alt={name} />
        <ul class={sub}>
          <li class={raceStyle}>Race: {race}</li>
          <li>Alignment: {alignment}</li>
          <li class={desc}>Description: {description}</li>
          <li>Affiliation: {affiliation}</li>
          <li>Status: {status}</li>
        </ul>
      </Card>
    </>
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
  h-80
  m-3
  text-xs
  overflow-y-auto
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
`;

const nameStyle = `
  truncate
  p-1
`;

const raceStyle = `
  list-none
  indent-0.5
`;
