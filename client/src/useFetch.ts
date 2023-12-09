import axios from 'axios';
import { useState, useEffect } from 'react';

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
    }
  };

  useEffect(() => {
    !isEditing && fetchData();
  }, []);

  return [manufacturing, other, service];
};

export default useFetchSectorsFormData;
