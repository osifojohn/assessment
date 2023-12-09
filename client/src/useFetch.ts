import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchSectorsFormData = (isEditing: boolean) => {
  const [manufacturing, setManufacturing] = useState({});
  const [other, setOther] = useState({});
  const [service, setService] = useState({});
  const [error, setError] = useState(false);
  const [sectorsIsLoading, setSectorsIsLoading] = useState(false);

  const fetchData = async () => {
    const timeout = 8000;
    setSectorsIsLoading(true);
    try {
      const apiUrl = 'https://task-w3z1.onrender.com/sectors/all-sectors';

      const { data } = await axios.get(apiUrl, { timeout });
      if (data) {
        setSectorsIsLoading(false);
        setError(false);
        setManufacturing(data.manufacturing);
        setOther(data.other);
        setService(data.service);
      }
    } catch (error) {
      setSectorsIsLoading(false);
      setError(true);
      console.error('Error fetching sectors:', error);
    } finally {
      setSectorsIsLoading(false);
    }
  };

  useEffect(() => {
    !isEditing && fetchData();
  }, []);

  return {
    error,
    fetchedSectorsFormData: [manufacturing, other, service],
    sectorsIsLoading,
  };
};

export default useFetchSectorsFormData;
