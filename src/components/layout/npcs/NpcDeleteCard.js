import React from 'react';
import ConfirmModalDialog from '../../modals/ConfirmModalDialog';
import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';

export default function NpcDeleteCard({ handleOpen, open, setOpen, handleDelete }) {
  return (
    <Wrapper>
      <Card>
        <Button className={'mb-20'} variant="contained" onClick={handleOpen}>
          Delete Npc
        </Button>
        <ConfirmModalDialog
          title="Delete Npc?"
          open={open}
          setOpen={setOpen}
          onConfirm={handleDelete}
        />
      </Card>
    </Wrapper>
  )
}

