import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '../../components/UI/Card'
import { Link, useParams } from 'react-router-dom'
import { getCampaignById } from '../../services/routes/routes'
import { useCampaign } from '../../contexts/CampaignProvider'

const CampaignDetail = () => {
  const { id } = useParams()
  const { campaign, setCampaign } = useCampaign()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaignById(id)
      setCampaign(res)
    }
    fetchData()
  },[id])

  const { name, image, description, gameMaster } = campaign
  return (
    <>
    <div>
      <Card class={styles}>
        <div>Name: {campaign.name}</div>
        <div><img class='max-w-xs rounded' src={image} alt={name}/></div>
        <div>Description: {description}</div>
        <div>GameMaster: {gameMaster}</div>
      </Card>
      <Link to={{
          pathname: `/campaigns/edit/${id}`,
        }}
      >
        <Button variant='contained'>Campaign Settings</Button>
      </Link>
    </div>
    </>
  )
}

export default CampaignDetail

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
