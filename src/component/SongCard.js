import React from 'react';
import { useState } from 'react';
const SongCard = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };
  return (
    <div className="song-card">   
      <audio
        controls  
        // src={song.songsrc}
        onPlay={togglePlay}
        onPause={togglePlay}
      />
    </div>
  );
};

export default SongCard;
