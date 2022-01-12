import { checkError, supabase as client } from '../client'

const addCampaign = async (cp) => {
  console.log(cp);
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

const addNpc = async (
  { name, image, race, alignment, description, affiliation, status },
  campaignId
) => {
  const res = await client.from('Npc').insert({
    name: name,
    image: image,
    race: race,
    alignment: alignment,
    description: description,
    affiliation: affiliation,
    status: status,
    campaignId: campaignId,
  });

  return checkError(res);
};

const getCampaignNpcs = async (id) => {
  const res = await client
    .from('Npc')
    .select(`* Campaign { * }`)
    .eq('campaignId', `${id}`);

  return checkError(res);
};

const getNpcById = async (id) => {
  const res = await client.from('Npc').select('*').match({ id }).single();

  return checkError(res);
};

const getNpcs = async () => {
  const res = await client.from('Npc').select('*').order('id');

  return checkError(res);
};

const updateNpc = async (id, npc) => {
  const res = await client
    .from('Npc')
    .update({
      name: npc.name,
      image: npc.image,
      race: npc.race,
      alignment: npc.alignment,
      description: npc.description,
      affiliation: npc.affiliation,
      status: npc.status,
    })
    .match({ id });
  return checkError(res);
};

const deleteNpc = async (id) => {
  const res = await client.from('Npc').delete().match({ id });

  return checkError(res);
};

export {
  addCampaign,
  deleteCampaign,
  getCampaignById,
  getCampaigns,
  updateCampaign,
  addNpc,
  getCampaignNpcs,
  getNpcById,
  getNpcs,
  updateNpc,
  deleteNpc,
};
