import { useEffect, useState } from 'react';
import { getCampaignNpcs, getCampaigns, getNpcs } from '../services/routes/index';
import { useCampaigns, useNpcs, useSetSearchItems } from '../contexts/CampaignProvider';

const useFetchCampaigns = () => {
  const { campaigns, setCampaigns } = useCampaigns();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaigns();
      setCampaigns(res);
      setLoading(false);
    };
    fetchData();
  },[]);

  return { campaigns, loading };
};

const useFetchNpcs = (id) => {
  const { npcs, setNpcs } = useNpcs();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let res;
    const fetchData = async () => {
      if(!id) res = await getNpcs();
      if(id) res = await getCampaignNpcs(id);
      setNpcs(res);
      setLoading(false);
    }
    fetchData();
  },[]);
  
  return { npcs, loading };
};

const useSearch = ({ data }) => {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState('name');
  const { setSearchItems } = useSetSearchItems();

  useEffect(() => {
    // I need to filter out chars like '/' that will break the regex logic
    const regEx = new RegExp(
      input
        .split('')
        .map((i) => i.toLowerCase())
        .join(''),
      'i'
    );
    if (!input) setSearchItems(data);
    if (input) {
      const filteredData = data.filter((i) => {
        const lowerCased = i[selected]
          .split('')
          .map((i) => i.toLowerCase())
          .join('');
        if (lowerCased.match(regEx)) {
          return i;
        } else {
          return null;
        }
      });
      setSearchItems(filteredData);
    } else {
      setSearchItems(data);
    }
  }, [data, input, selected, setSearchItems]);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSelectChange = ({ target }) => {
    setSelected(target.value);
  };

  return { data, input, selected, handleChange, handleSelectChange };
};

// const searchReducer = (state, action) => {
//   switch(action.type) {
//     case 'SEARCH_CAMPAIGNS':
//       return [...state.campaigns];
//     case 'SEARCH_NPCS':
//       return [...state.npcs];
//     default:
//       throw new Error('Something went wrong');
//   }
// };

export { useFetchCampaigns, useFetchNpcs, useSearch };
