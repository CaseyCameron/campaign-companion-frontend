import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';

const PlayerDeleteCard = () => {
  return (
    <Wrapper class={wrapperStyle}>
      <Card>
        <Button class={button} variant="contained" disableElevation>
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

const wrapperStyle = `
  m-2
`
