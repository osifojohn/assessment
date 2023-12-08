import { displayUserDataProps } from '../utils/types';
import FormAction from './forms/FormAction';

export default function DisplayData({
  userData,
  setIsDisplayUserData,
  setIsEditing,
}: displayUserDataProps) {
  const handleClick = () => {
    setIsDisplayUserData(false);
    setIsEditing(true);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-8 mt-10 [&>*]:mb-5">
        <div className="flex flex-col items-cent">
          <h2 className="mr-4 text-2xl">User Information</h2>
        </div>
        <p>Name: {userData?.name}</p>
        <div>
          <p>Sectors: </p>
          {userData.sectors.map((sector, index) => (
            <p key={index}>{sector.name}</p>
          ))}
        </div>
        <p>Agreed to terms: {userData.agreeToTerms ? 'Yes' : 'No'}</p>
      </div>
      <FormAction action="button" text="Edit" handleClick={handleClick} />
    </div>
  );
}
