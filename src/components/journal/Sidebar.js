import { useDispatch, useSelector } from 'react-redux';
import { startAuthSignOut } from '../../actions/authActions';
import { doNotesActiveNote } from '../../actions/notesActions';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  //hooks
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //functions
  const handleSignOut = () => {
    dispatch(startAuthSignOut());
  };

  const handleNewEntry = () => {
    const emptyNote = {
      id: '',
      title: '',
      body: '',
      imageUrl: '',
      date: new Date().getTime(),
    };
    dispatch(doNotesActiveNote(emptyNote));
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name} </span>
        </h3>

        <button onClick={handleSignOut} className="btn2">
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={handleNewEntry}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
