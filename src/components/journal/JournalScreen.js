import { useDispatch } from 'react-redux';
import { startAuthSignOut } from '../../actions/authActions';

export const JournalScreen = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(startAuthSignOut());
  };
  return (
    <div>
      <h1>JournalScreen</h1>
      <button type="button" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};
