import { Button } from '@material-ui/core';
import React from 'react';
import { Card, Wrapper } from '../../UI';

const PlayerCard = () => {
  return (
    <Wrapper>
      <Card>
        <div className={players}>
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
          <div>Player 4</div>
          <div>Player 5</div>
          <div>Player 6</div>
        </div>
        <div>
          <Button class={button} variant="contained">
            Add Player
          </Button>
          <Button class={button} variant="contained" disableElevation>
            Delete Player
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};

export default PlayerCard;

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  px-2
  mx-2
`;

const players = `
  flex
  flex-col
  text-left
  px-4
`;
