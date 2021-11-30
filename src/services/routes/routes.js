import { checkError, supabase as client } from '../client'

const getCampaignById = async(id) => {
  const res = await client
    .from('Campaign')
    .select('*')
    .match({ id })
    .single()

  return checkError(res)
}

const getCampaigns = async() => {
  const res = await client
    .from('Campaign')
    .select('*')
    .order('id')

  return checkError(res)
}

const getNpcs = async() => {
  const res = await client
    .from('Npc')
    .select('*')
    .order('id')

  return checkError(res)
}

const getCampaignNpcs = async() => {
  const res = await client 
    .from('Npc')
    .select(
      `
      *,
      campaign (id)
      `
    )
    .order('id')
    
    return checkError(res)
}

export { getCampaignById, getCampaigns, getCampaignNpcs, getNpcs }
