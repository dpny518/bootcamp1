import React from 'react';

const Transcription = ({ transcript }) => {
  return (
    <div className="transcription-container">
      <h3>Transcription:</h3>
      <p>{transcript}</p>
    </div>
  );
};

export default Transcription;

