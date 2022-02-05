import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

const NpcCard = (npc) => {
  return (
    <Card class={styles}>
      <Link className="p-4 min-w-auto" to={`/npcs/detail/${npc.id}`}>
        <div className={nameStyle}>{npc.name}</div>
        <img className={imageStyle} src={npc.image} alt={npc.name} />
        <div className={sub}>
          <div className={raceStyle}>Race: <span className={text}>{npc.race}</span></div>
          <div>Alignment: <span className={text}>{npc.alignment}</span></div>
          <div>Description: </div>
          <div className={desc}>{npc.description}</div>
          <div>Affiliation: <span className={text}>{npc.affiliation}</span></div>
          <div>Status: <span className={text}>{npc.status}</span></div>
        </div>
      </Link>
    </Card>
  );
};

export default NpcCard;

const styles = `
  flex 
  flex-col 
  items-center 
  text-center
  border-2 
  border-solid 
  rounded 
  w-72
  sm:w-80
  m-3
  overflow-y-auto
  shadow-lg
  text-sm
`;

const sub = `
  flex
  flex-col
  text-left
  m-3
`;

const desc = `
  max-h-24
  font-serif
  text-xs
  indent-2
  overflow-auto
  border-solid
  border-t-2
  border-b-2
  border-slate-300
`
const imageStyle = `
  h-44
  p-2
  rounded
  mx-auto
`;

const nameStyle = `
  text-clip
  p-1
  border-solid
  border-b-2
  border-slate-300
`;

const raceStyle = `
  list-none
  indent-0.5
`;

const text = 'font-serif text-xs';
