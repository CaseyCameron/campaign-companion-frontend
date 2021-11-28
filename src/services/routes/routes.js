import { checkError, supabase as client } from '../client'

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

export { getCampaigns, getNpcs }
