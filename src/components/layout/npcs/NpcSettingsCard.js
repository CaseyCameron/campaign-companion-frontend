import React from 'react';
import NpcForm from '../../forms/NpcForm';
import { Card, Wrapper } from '../../UI';
import NpcDeleteCard from './NpcDeleteCard';

const NpcSettingsCard = ({ npc }) => {
  return (
    <Wrapper class={wrapperStyle}>
      <Card class={cardStyles}>
        <NpcForm npc={npc} addForm={false} />
      </Card>
    </Wrapper>
  );
};

export default NpcSettingsCard;

const cardStyles = `
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  w-72
  sm:w-80
  m-3
  p-2
`;

const wrapperStyle = `
  flex
  flex-wrap
  justify-center
`;
