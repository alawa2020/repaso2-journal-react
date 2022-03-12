import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doNotesUpdateActiveNote } from '../../actions/notesActions';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  //hooks
  const { activeNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const { formData, handleInputChange, resetForm } = useForm(activeNote);
  const { id, title, body, imageUrl, date } = formData;
  const dateRef = useRef(date);
  const imageUrlRef = useRef(activeNote.imageUrl);

  useEffect(() => {
    dispatch(doNotesUpdateActiveNote({ title, body }));
  }, [title, body, dispatch]);
  useEffect(() => {
    if (activeNote.date !== dateRef.current) {
      resetForm(activeNote);
      dateRef.current = activeNote.date;
    }
    if (activeNote.imageUrl !== imageUrlRef.current) {
      resetForm(activeNote);
      imageUrlRef.current = activeNote.imageUrl;
    }
  }, [activeNote, resetForm]);
  //functions

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {imageUrl && (
          <div className="notes__image">
            <img src={imageUrl} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};
