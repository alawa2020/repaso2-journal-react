import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  doNotesUpdateActiveNote,
  startSaveNewNote,
  startUpdateNote,
} from '../../actions/notesActions';
import { uploadImageAndGetUrl } from '../../utils/uploadImageAndGetUrl';

dayjs.locale('es');
const currentDate = dayjs().format('D [de] MMMM YYYY');

export const NotesAppBar = () => {
  //hooks
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);
  const inputFileRef = useRef();

  //functions
  const handleClickPicture = () => {
    inputFileRef.current.click();
  };
  const handleInputFileChange = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await uploadImageAndGetUrl(file);
    dispatch(doNotesUpdateActiveNote({ imageUrl }));
    e.target.value = '';
  };

  const handleSaveNote = () => {
    if (activeNote.id) {
      dispatch(startUpdateNote(activeNote));
    } else {
      dispatch(startSaveNewNote(activeNote));
      console.log('subir new note');
    }
  };
  return (
    <div className="notes__appbar">
      <span>{currentDate}</span>

      <div>
        <input
          ref={inputFileRef}
          style={{ display: 'none' }}
          type="file"
          name="inputFile"
          onChange={handleInputFileChange}
        />

        <button onClick={handleClickPicture} className="btn2">
          Picture
        </button>

        <button onClick={handleSaveNote} className="btn2">
          Save
        </button>
      </div>
    </div>
  );
};
