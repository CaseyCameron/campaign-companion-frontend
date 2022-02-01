import { checkError, supabase as client } from '../client'

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

const updateNpc = async (id, npc, campaignId) => {
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
      campaignId: campaignId,
    })
    .match({ id });
  return checkError(res);
};

const deleteNpc = async (id) => {
  const res = await client.from('Npc').delete().match({ id });

  return checkError(res);
};

export {
  addNpc,
  getCampaignNpcs,
  getNpcById,
  getNpcs,
  updateNpc,
  deleteNpc,
};
