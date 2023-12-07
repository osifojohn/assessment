import { FormEvent, useEffect, useState } from 'react';
import './App.css';

import SelectSectors from './components/SelectSectors';
import FormAction from './components/forms/FormAction';
import FormExtra from './components/forms/FormExtra';
import NameInput from './components/NameInput';
import { SectorItem } from './utils/types';
import data from './index.json';
import { getUserDetailFromLocalStorage } from './utils/localStorage';
import { handleErrorMessage } from './utils/handleErrorMessage';
import DisplayData from './components/DisplayData';

function App() {
  const [name, setName] = useState('');
  const [sectors, SetSectors] = useState<SectorItem[]>([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const retrievedName = getUserDetailFromLocalStorage('name');
    const retrievedAgreeToTerms = getUserDetailFromLocalStorage('agreeToTerms');
    const retrievedSectors = getUserDetailFromLocalStorage('sectors');

    if (retrievedName) setName(retrievedName);
    if (retrievedAgreeToTerms) setAgreeToTerms(retrievedAgreeToTerms);
    if (retrievedSectors?.length > 0) SetSectors(retrievedSectors);
  }, []);

  useEffect(() => {
    // Save to local storage, if you like
    // setIsLoading(true);
    console.log(sectors);
    console.log(name);
    console.log(agreeToTerms);
  }, [sectors, name, agreeToTerms]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name) handleErrorMessage('Please enter your name');

    if (name && sectors.length === 0) {
      handleErrorMessage('Please choose sectors');
      setOpenDropDown(true);
    }

    if (name && sectors.length > 0 && agreeToTerms === false)
      handleErrorMessage('Please agree to terms');

    if (!name || sectors.length === 0 || agreeToTerms === false) return;

    console.log('Form submitted:', 'Hello');
  };

  return (
    <div>
      {!userData ? (
        <form onSubmit={handleSubmit} className="grid justify-center">
          <NameInput name={name} setName={setName} />
          <SelectSectors
            data={data}
            onChange={SetSectors}
            sectors={sectors}
            openDropDown={openDropDown}
            setOpenDropDown={setOpenDropDown}
          />
          <FormExtra
            agreeToTerms={agreeToTerms}
            setAgreeToTerms={setAgreeToTerms}
          />
          <FormAction action="submit" isLoading={isLoading} text="Submit" />
        </form>
      ) : (
        DisplayData()
      )}
    </div>
  );
}

export default App;
