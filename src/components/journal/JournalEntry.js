import React from 'react';
import dayjs from 'dayjs';

export const JournalEntry = ({ title, body, date, imageUrl }) => {
  const dateDayName = dayjs(date).format('dddd');
  const dateDayNumber = dayjs(date).format('D');
  const dateTime = dayjs(date).format('h[:]mma');
  return (
    <div className="journal__entry pointer">
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
        <span>{dateDayName}</span>
        <h4>{dateDayNumber}</h4>
        <span>{dateTime}</span>
      </div>
    </div>
  );
};
