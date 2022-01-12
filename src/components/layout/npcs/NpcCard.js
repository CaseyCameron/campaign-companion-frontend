import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNpcEditForm } from '../../../contexts/CampaignProvider';
import { Button } from '@material-ui/core';
import Card from '../../UI/Card';
import ConfirmModalDialog from '../../modals/ConfirmModalDialog';
import FormModalDialog from '../../modals/FormModalDialog';

const NpcCard = (npc, update) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  // const { npcEditForm, setNpcEditForm } = useNpcEditForm();
  // my navbar needs to know whether openEdit is true
  // if it is true we must ensure open is false on addNpcForm

  const handleDelete = () => {
    console.log('deleting');
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
    // setNpcEditForm(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    // setNpcEditForm(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
    console.log('hello i am delete');
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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
        {update && (
          <div class={buttons}>
            <Button className={button} type="submit" onClick={handleOpenEdit}>
              Edit
            </Button>
            <FormModalDialog
              npc={npc}
              open={openEdit}
              handleClose={handleCloseEdit}
              formType={'updateNpc'}
            />

            <Button className={button} onClick={handleOpenDelete}>
              Delete
            </Button>
            <ConfirmModalDialog
              title="Are you sure?"
              open={openDelete}
              setOpen={setOpenDelete}
              onConfirm={handleDelete}
              handleCLose={handleCloseDelete}
            />
          </div>
        )}
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
  h-92
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
