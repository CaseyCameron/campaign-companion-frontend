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
        <div class={sub}>
          <div>Race: {race}</div>
          <div>Alignment: {alignment}</div>
          <div class={desc}>Description: {description}</div>
          <div>Affiliation: {affiliation}</div>
          <div>Status: {status}</div>
        </div>
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
`;

const sub = `
  flex
  flex-col
  text-left
`;

const desc = `
  h-12
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
