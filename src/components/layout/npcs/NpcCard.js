import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

const NpcCard = (npc) => {
  return (
    <Link to={`/npcs/detail/${npc.id}`}>
      <Card class={styles}>
        <div class={nameStyle}>{npc.name}</div>
        <img class={imageStyle} src={npc.image} alt={npc.name} />
        <div class={sub}>
          <div class={raceStyle}>Race: {npc.race}</div>
          <div>Alignment: {npc.alignment}</div>
          <div class={desc}>Description: {npc.description}</div>
          <div>Affiliation: {npc.affiliation}</div>
          <div>Status: {npc.status}</div>
        </div>
      </Card>
    </Link>
  );
};

export default NpcCard;

const styles = `
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  w-72
  sm:w-80
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
`;

const button = `
  shadow-md
`;
