import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Card from '../../UI/Card';

export default function CampaignCard({ id, name, description, image }) {
  return (
    <Card class={styles}>
      <Link to={`campaigns/detail/${id}`}>
      <div class={title}>{name}</div>
      <img class={imageStyle} src={image} alt={name} />
      <div class={desc}>Description: {description}</div>
      </Link>
      <Link to={`campaigns/settings/${id}`}>
        <Button class={button} type="submit" variant="outlined">
          Campaign Settings
        </Button>
      </Link>
    </Card>
  );
}

const styles = `
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  w-80
  sm:w-96
  m-3
  shadow-lg
`;

const desc = `
  h-12
`

const imageStyle = `
  h-44
  w-full
  max-w-xs
  rounded
  object-cover
`;

const title = `
  truncate
  p-1
`

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  m-2
`;
