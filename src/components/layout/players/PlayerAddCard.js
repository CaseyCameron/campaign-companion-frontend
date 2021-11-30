import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';

const PlayerAddCard = () => {
  return (
    <Wrapper>
      <Card>
        <Button class={button} type="submit" variant="outlined">
          Add Player
        </Button>
      </Card>
    </Wrapper>
  );
};

export default PlayerAddCard;

const button = `
border-solid
border-2
rounded-md
w-auto
`;
