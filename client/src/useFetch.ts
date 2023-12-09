import axios from 'axios';
import { useState, useEffect } from 'react';
import { handleErrorMessage } from './utils/handleErrorMessage';

const useFetchSectorsFormData = (isEditing: boolean) => {
  const [manufacturing, setManufacturing] = useState({});
  const [other, setOther] = useState({});
  const [service, setService] = useState({});

  const fetchData = async () => {
    try {
      const apiUrl = 'https://task-w3z1.onrender.com/sectors/all-sectors';
      const { data } = await axios.get(apiUrl);
      if (data) {
        setManufacturing(data.manufacturing);
        setOther(data.other);
        setService(data.service);
      }
    } catch (error) {
      console.error('Error fetching sectors:', error);
      handleErrorMessage(
        'Backend not connected, pls reload after some minutes'
      );
    }
  };

  useEffect(() => {
    !isEditing && fetchData();
  }, []);

  return [manufacturing, other, service];
};

export default useFetchSectorsFormData;
