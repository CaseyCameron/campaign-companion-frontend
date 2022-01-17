import React, { useState } from 'react'
import AddCampaign from '../components/layout/campaigns/AddCampaign';
import AddNpc from '../components/layout/npcs/AddNpc';
import { getCampaigns } from '../services/routes/routes';
import Search from '../components/controls/Search';
import { useLocation } from 'react-router-dom';
import { useCampaigns, useNpcs } from '../contexts/CampaignProvider';
import { Wrapper } from '../components/UI';

const SearchBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { campaigns, setCampaigns } = useCampaigns();
  const { npcs, setNpcs } = useNpcs();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNpcOpen = async () => {
    if (campaigns) {
      setOpen(true);
    } else {
      const campaign = await getCampaigns();
      setCampaigns(campaign);
      setOpen(true);
    }
  };

  return (
    <Wrapper class={style}>
      {location.pathname === '/' && (
        <div class={searchType}>
          <Search type={'campaigns'} data={campaigns} />
          <AddCampaign
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </div>
      )}
      {location.pathname === '/npcs' && (
        <div class={searchType}>
          <Search type={'npcs'} data={npcs} />
          <AddNpc
            open={open}
            handleClose={handleClose}
            handleOpen={handleNpcOpen}
            campaign={campaigns}
          />
        </div>
      )}
      {location.pathname.includes('detail') && (
        <div class={searchType}>
          <Search type={'npcs'} data={npcs} />
          <AddNpc
            open={open}
            handleClose={handleClose}
            handleOpen={handleNpcOpen}
            campaign={campaigns}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default SearchBar;

const searchType = `
  flex
  w-full
  justify-between
`;

const style = `
  flex
  m-2
  w-full
  h-12
`;

