import { checkError, supabase as client } from '../client'

const addCampaign = async (cp) => {
  const res = await client.from('Campaign').insert({
    name: cp.name,
    image: cp.image,
    description: cp.description,
    gameMaster: cp.gameMaster,
  });

  return checkError(res);
};

const getCampaignById = async (id) => {
  const res = await client.from('Campaign').select('*').match({ id }).single();

  return checkError(res);
};

const getCampaigns = async () => {
  const res = await client.from('Campaign').select('*').order('id');

  return checkError(res);
};

const updateCampaign = async (id, cp) => {
  const res = await client
    .from('Campaign')
    .update({
      name: cp.name,
      image: cp.image,
      description: cp.description,
      gameMaster: cp.gameMaster,
    })
    .match({ id });

  return checkError(res);
};

const deleteCampaign = async (id) => {
  const res = await client.from('Campaign').delete().match({ id });

  return checkError(res);
};

export {
  addCampaign,
  deleteCampaign,
  getCampaignById,
  getCampaigns,
  updateCampaign,
};
