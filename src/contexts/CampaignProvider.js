import React, { createContext, useContext, useState } from 'react'

const CampaignCompanionContext = createContext()

export const CampaignProvider = ({ children }) => {
  const [campaign, setCampaign] = useState([])
  const [npcs, setNpcs] = useState([])

  const value = {
    campaign,
    setCampaign,
    npcs,
    setNpcs
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

export const useNpcs = () => {
  const { npcs, setNpcs } = useContext(CampaignCompanionContext)

  return { npcs, setNpcs }
}
