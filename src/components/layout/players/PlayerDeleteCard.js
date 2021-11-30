import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';

const PlayerDeleteCard = () => {
  return (
    <Wrapper>
      <Card>
        <Button class={button} type="submit" variant="outlined">
          Delete Player
        </Button>
      </Card>
    </Wrapper>
  );
};

export default PlayerDeleteCard;

const button = `
border-solid
border-2
rounded-md
w-auto
`;
