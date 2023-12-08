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
    <div>
      <div>
        <h2>User Information</h2>
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
