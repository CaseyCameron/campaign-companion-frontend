import React, { useState } from 'react';
import { deleteNpc } from '../../../services/routes/routes';
import ConfirmModalDialog from '../../modals/ConfirmModalDialog';
import { useNavigate } from 'react-router';

import Button from '@material-ui/core/Button';
import { Card, Wrapper } from '../../UI';

export default function NpcDeleteCard({ id }) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteNpc(id);
    navigate('/');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <Card>
      <Button variant="contained" onClick={handleOpen}>
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

