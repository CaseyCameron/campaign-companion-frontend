import React from 'react'
import Card from '../../UI/Card'


export default function NpcCard({ id, name, race, alignment, description, image, affiliation, status }) {
  return (
    <>
      <Card class={styles}>
        <div>Name: {name}</div>
        <div><img class='max-w-xs rounded' src={image} alt={name}/></div>
        <div>Race: {race}</div>
        <div>Alignment: {alignment}</div>
        <div class='flex flex-col text-left'>Description: <textarea class='w-72 pl-5'>{description}</textarea></div>
        <div >Affiliation: {affiliation}</div>
        <div >Status: {status}</div>
      </Card>
    </>
  )
}

const styles =
  `flex 
  flex-col
  items-start
  border-2 
  border-solid 
  rounded 
  max-w-sm 
  m-3
  p-4
`
