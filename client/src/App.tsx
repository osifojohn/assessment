import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import {
  addUserDetailToLocalStorage,
  getUserDetailFromLocalStorage,
} from './utils/localStorage';
import {
  handleErrorMessage,
  handleSuccessMessage,
} from './utils/handleErrorMessage';
import SelectSectors from './components/SelectSectors';
import FormAction from './components/forms/FormAction';
import FormExtra from './components/forms/FormExtra';
import DisplayData from './components/DisplayData';
import NameInput from './components/NameInput';
import { SectorItem, UserData } from './utils/types';
import useFetchSectorsFormData from './useFetch';

//sectors data
// import data from './index.json';

function App() {
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState<SectorItem[]>([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isDisplayUserData, setIsDisplayUserData] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { error, fetchedSectorsFormData, sectorsIsLoading } =
    useFetchSectorsFormData(isEditing);

  const postData = async (arg: UserData) => {
    setIsLoading(true);
    try {
      const apiUrl = !isEditing
        ? 'https://task-w3z1.onrender.com/user-details'
        : `https://task-w3z1.onrender.com/user-details/${userData?._id}`;

      const { data } = await axios.post(apiUrl, arg);
      if (data) {
        setIsEditing(false);
        handleSuccessMessage('Data saved successfully');
        setName(data?.name);
        setAgreeToTerms(data?.agreeToTerms);
        setSectors(data?.sectors);
        addUserDetailToLocalStorage({ key: 'userSavedToDb', val: data });
        setUserData(data);
        setIsDisplayUserData(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handleErrorMessage('An error occured');
      console.error('Error posting data:', error);
    }
    setIsLoading(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) handleErrorMessage('Name required');

    if (name && sectors.length === 0) handleErrorMessage('Sectors required');
    if (name && sectors.length > 0 && agreeToTerms === false)
      handleErrorMessage('Agree to terms is required');

    if (!name || sectors.length === 0 || agreeToTerms === false) {
      return;
    }

    !isEditing
      ? postData({ name, sectors, agreeToTerms })
      : postData({ _id: userData?._id, name, sectors, agreeToTerms });
  };

  useEffect(() => {
    const retrievedName = getUserDetailFromLocalStorage('name');
    const retrievedAgreeToTerms = getUserDetailFromLocalStorage('agreeToTerms');
    const retrievedSectors = getUserDetailFromLocalStorage('sectors');

    if (retrievedName) setName(retrievedName);
    if (retrievedAgreeToTerms) setAgreeToTerms(retrievedAgreeToTerms);
    if (retrievedSectors?.length > 0) setSectors(retrievedSectors);

    const retrievedUser = getUserDetailFromLocalStorage('userSavedToDb');

    if (retrievedUser) {
      setUserData(retrievedUser);
      setIsDisplayUserData(true);
    }
  }, []);

  useEffect(() => {
    if (error === true || !fetchedSectorsFormData?.length)
      handleErrorMessage('Server not live yet, pls reload');
  }, [error, fetchedSectorsFormData]);

  return (
    <>
      {!userData || isDisplayUserData === false || isEditing ? (
        <form onSubmit={handleSubmit} className="grid justify-center">
          <NameInput name={name} setName={setName} />

          <SelectSectors
            data={fetchedSectorsFormData as SectorItem[]}
            onChange={setSectors}
            sectors={sectors}
            openDropDown={openDropDown}
            setOpenDropDown={setOpenDropDown}
            sectorsIsLoading={sectorsIsLoading}
          />
          <FormExtra
            agreeToTerms={agreeToTerms}
            setAgreeToTerms={setAgreeToTerms}
          />
          <FormAction action="submit" isLoading={isLoading} text="Submit" />
        </form>
      ) : (
        <DisplayData
          userData={userData}
          setIsDisplayUserData={setIsDisplayUserData}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default App;
