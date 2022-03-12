import React from 'react';

export const ErrorSentForm = ({ errorMessage }) => {
  return (
    <div className="auth__error">
      <span>{errorMessage}</span>
    </div>
  );
};
