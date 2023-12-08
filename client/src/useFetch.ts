import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchSectorsFormData = (isEditing: boolean) => {
  const [manufacturing, setManufacturing] = useState({});
  const [other, setOther] = useState({});
  const [service, setService] = useState({});

  const manufacturingApi = `http://localhost:5000/sectors/manufacturing`;
  const serviceApi = `http://localhost:5000/sectors/service`;
  const otherApi = 'http://localhost:5000/sectors/other';

  const getManufacturing = axios.get(manufacturingApi);
  const getService = axios.get(serviceApi);
  const getOther = axios.get(otherApi);

  const fetchData = () => {
    axios
      .all([getManufacturing, getOther, getService])
      .then(
        axios.spread((manufacturingData, otherData, serviceData) => {
          setManufacturing(manufacturingData.data);
          setOther(otherData.data);
          setService(serviceData.data);
        })
      )
      .catch((error) => {
        console.error('Error fetching sectors:', error);
      });
  };

  useEffect(() => {
    !isEditing && fetchData();
  }, []);

  return [manufacturing, other, service];
};

export default useFetchSectorsFormData;
