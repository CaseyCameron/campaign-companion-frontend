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
    <Card class={styles}>
      <div class={nameStyle}>{name}</div>
      <img class={imageStyle} src={image} alt={name} />
      <di class={sub}>
        <div class={raceStyle}>Race: {race}</div>
        <div>Alignment: {alignment}</div>
        <div class={desc}>Description: {description}</div>
        <div>Affiliation: {affiliation}</div>
        <div>Status: {status}</div>
      </di>
    </Card>
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
