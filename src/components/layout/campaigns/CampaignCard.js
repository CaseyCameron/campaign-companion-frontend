import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../UI/Card';

export default function CampaignCard({ id, name, description, image }) {
  return (
    <>
      <Link to={`campaigns/detail/${id}`}>
        <Card class={styles}>
          <div>Name: {name}</div>
          <div>
            <img class="max-w-xs rounded" src={image} alt={name} />
          </div>
          <div>Description: {description}</div>
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
