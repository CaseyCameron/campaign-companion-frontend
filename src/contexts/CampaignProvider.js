import React, { createContext, useContext, useState } from 'react'

const CampaignCompanionContext = createContext()

export const CampaignProvider = ({ children }) => {
  const [campaign, setCampaign] = useState([])
  // const [npc, setNpc] = useState([])

  const value = {
    campaign,
    setCampaign
  }

  return (
    <CampaignCompanionContext.Provider value={value}>
      {children}
    </CampaignCompanionContext.Provider>
  )
}

export const useCampaign = () => {
  const { campaign, setCampaign } = useContext(CampaignCompanionContext)

  return  { campaign, setCampaign }
}
