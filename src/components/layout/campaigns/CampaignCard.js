import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Card from '../../UI/Card';

export default function CampaignCard({ id, name, description, image }) {
  return (
    <>
      <Link to={`campaigns/detail/${id}`}>
        <Card class={styles}>
          <div class={itemStyle}>Name: {name}</div>
          <div class={itemStyle}>
            <img class="max-w-xs rounded" src={image} alt={name} />
          </div>
          <div class={itemStyle}>Description: {description}</div>
          <Link to={`campaigns/settings/${id}`}>
          <Button class={button} type="submit" variant="outlined">
            Campaign Settings
          </Button>
          </Link>
        </Card>
      </Link>
    </>
  );
}

const styles =
`
  flex 
  flex-col 
  items-center 
  border-2 
  border-solid 
  rounded 
  max-w-sm 
  m-3
`
const itemStyle = `
  p-1
`

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  m-2
`;
