import axios from 'axios';
import { useState } from 'react';
import { SectorItem } from './utils/types';

const useFetchSectorsFormData = () => {
  const [sectors, SetSectors] = useState<SectorItem[]>([]);

  const manufacturingApi = `localhost:5000/sectors/manufacturing`;
  const service = `localhost:5000/sectors/service`;
  const other = 'localhost:5000/sectors/other';

  const getManufacturing = axios.get(manufacturingApi);
  const getService = axios.get(service);
  const getOther = axios.get(other);

  axios.all([getManufacturing, getService, getOther]).then(
    axios.spread((allData) => {
      console.log(allData);
    })
  );

  return sectors;
};

export default useFetchSectorsFormData;
