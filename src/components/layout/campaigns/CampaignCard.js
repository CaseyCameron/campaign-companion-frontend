import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Card from '../../UI/Card';

export default function CampaignCard({ id, name, description, image, user }) {
  return (
    <Card class={styles}>
      <Link to={`campaigns/detail/${id}`}>
          <div className={title}>{name}</div>
          <img className={imageStyle} src={image} alt={name} />
          <div className={desc}>Description: {description}</div>
      </Link>
      {user && 
        <Link to={`campaigns/settings/${id}`}>
          <Button class={button} type="submit" variant="outlined">
            Campaign Settings
          </Button>
        </Link>
      }
    </Card>
  );
}

const styles = `
  flex 
  flex-col 
  items-center
  text-center
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
  overflow-auto
`

const imageStyle = `
  h-44
  rounded
  p-2
  mx-auto
`;

const title = `
  text-center
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
