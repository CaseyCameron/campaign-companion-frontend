import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';

const PlayerPermissionsCard = () => {
  return (
    <Wrapper>
      <Card>
        <div>
          <div>Permissions Checkboxes</div>
          <div>Player Dropdown</div>
        </div>
        <Button class={button} type="submit" variant={'contained'}>
          Assign Permissions
        </Button>
      </Card>
    </Wrapper>
  );
};

export default PlayerPermissionsCard;

const button = `
border-solid
border-2
rounded-md
w-auto
px-2
`;
