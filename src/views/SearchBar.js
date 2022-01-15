import React, { useState } from 'react'
import AddCampaign from '../components/layout/campaigns/AddCampaign';
import AddNpc from '../components/layout/npcs/AddNpc';
import { getCampaigns } from '../services/routes/routes';
import { useLocation } from 'react-router-dom';
import { useCampaign } from '../contexts/CampaignProvider';
import { Wrapper } from '../components/UI';

const SearchBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { campaign, setCampaign } = useCampaign();

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNpcOpen = async () => {
    if(campaign) {
       setOpen(true);
    } else {
      const campaigns = await getCampaigns();
      setCampaign(campaigns);
      setOpen(true);
    }
  }
  
  return (
    <Wrapper>
      <div class={style}>
        {location.pathname === '/' && (
          <div class={rightItemStyle}>
            <AddCampaign open={open} handleClose={handleClose} handleOpen={handleOpen} />
          </div>
        )}
        {location.pathname === '/npcs' && (
          <div class={rightItemStyle}>
            <AddNpc open={open} handleClose={handleClose} handleOpen={handleNpcOpen} campaign={campaign} />
          </div>
        )}
        {location.pathname.includes('detail') && (
          <div class={rightItemStyle}>
            <AddNpc open={open} handleClose={handleClose} handleOpen={handleNpcOpen} campaign={campaign} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default SearchBar;

const style = `
  flex
  list-none
`;

  const rightItemStyle = `
  flex
  absolute 
  right-0
  m-2
`;

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  shadow-sm
`;
