import React from 'react';

const Song = () => {
  const audioRef = React.useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src="../song/titanic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
};

export default Song;
