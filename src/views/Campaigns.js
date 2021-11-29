import React, { useEffect, useState } from 'react'
import CampaignCard from '../components/layout/campaigns/CampaignCard'
import { getCampaigns } from '../services/routes/routes'
import { useCampaign } from '../contexts/CampaignProvider'

const Campaigns = () => {
  const { campaign, setCampaign }= useCampaign()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns()
      setCampaign(res)
    }
    fetchData()
  },[])

  return (
    <>
      <div class='m-2 flex '>
        { campaign.map(campaign => <CampaignCard {...campaign} key={campaign.id} />) }
      </div>
    </>
  )
}

export default Campaigns
