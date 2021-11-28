import React from 'react'
import Card from '../../UI/Card'

export default function CampaignCard({ id, name, description, image, gameMaster }) {
  return (
    <>
      <Card class={styles}>
        <div>Name: {name}</div>
        <div><img class='max-w-xs rounded' src={image} alt={name}/></div>
        <div>Description: {description}</div>
        <div>GM: {gameMaster}</div>
      </Card>
    </>
  )
}

const styles =
`flex 
flex-col 
items-center 
border-2 
border-solid 
rounded 
max-w-sm 
m-3
`
