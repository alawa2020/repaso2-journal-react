import { useDispatch, useSelector } from 'react-redux';
import { startAuthSignOut } from '../../actions/authActions';

export const JournalScreen = () => {
  //hooks
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(startAuthSignOut());
  };
  return (
    <div>
      <h1>Welcome: {name}</h1>
      <h2>website under development...</h2>
      <button type="button" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};
