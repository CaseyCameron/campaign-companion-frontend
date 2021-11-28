import React, { useEffect, useState } from 'react'
import CampaignCard from '../components/layout/campaigns/CampaignCard'
import { getCampaigns } from '../services/routes/routes'

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns()
      setCampaigns(res)
    }
    fetchData()
  },[])

  return (
    <>
      <div class='m-2 flex '>
        {campaigns.map(campaign => {
          return <CampaignCard {...campaign} key={campaign.id} />
        })}
      </div>
    </>
  )
}

export default Campaigns
