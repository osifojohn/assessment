import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchSectorsFormData = (isEditing: boolean) => {
  const [manufacturing, setManufacturing] = useState({});
  const [other, setOther] = useState({});
  const [service, setService] = useState({});

  const manufacturingApi = `https://task-w3z1.onrender.com/sectors/manufacturing`;
  const serviceApi = `https://task-w3z1.onrender.com/sectors/service`;
  const otherApi = 'https://task-w3z1.onrender.com/sectors/other';

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
