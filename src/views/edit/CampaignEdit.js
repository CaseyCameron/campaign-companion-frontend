import React from 'react'
import CampaignForm from '../../components/layout/campaigns/CampaignForm'
import { useCampaign } from '../../contexts/CampaignProvider'

const CampaignEdit = () => {
  const { campaign, setCampaign } = useCampaign()

    return(
      <>
      <div>Edit Campaign</div>
      <div>{campaign.created_at}</div>
      <div>{campaign.name}</div>
      <CampaignForm campaign={campaign} />
      </>
    )
}

export default CampaignEdit
