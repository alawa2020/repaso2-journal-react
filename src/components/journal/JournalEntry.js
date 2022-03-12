import React from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { doNotesActiveNote } from '../../actions/notesActions';

export const JournalEntry = (note) => {
  const { id, title, body, date, imageUrl } = note;
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleClickEntry = () => {
    dispatch(doNotesActiveNote(note));
  };
  return (
    <div className="journal__entry pointer" onClick={handleClickEntry}>
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{dayjs(date).format('dddd')}</span>
        <h4>{dayjs(date).format('D')}</h4>
        <span>{dayjs(date).format('h[:]mma')}</span>
      </div>
    </div>
  );
};
