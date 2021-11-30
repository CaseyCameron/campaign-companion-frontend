import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CampaignSettingsCard } from '../../components/layout/campaigns';
import { getCampaignById } from '../../services/routes/routes';
import { useCampaign } from '../../contexts/CampaignProvider';

const CampaignSettings = () => {
  const { campaign, setCampaign } = useCampaign();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaignById(id);
      setCampaign(res);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <CampaignSettingsCard />
    </>
  );
};

export default CampaignSettings;

const styles = `
  flex 
  flex-col
  items-center 
  border-2 
  border-solid 
  rounded 
  max-w-sm 
  m-3
`;
