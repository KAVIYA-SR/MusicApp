import React, {useContext} from 'react'
import SpotifyPlayer from 'react-spotify-player';
import Data from '../context/Data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMusic} from '@fortawesome/free-solid-svg-icons';
export default function Player() {
    const {play,playbg} =useContext(Data);
    const size = {
  width: '90%',
  height:'800',
};
const containerStyle = {
  backgroundImage: playbg,
  // Add any other desired styles for the container
};
const view = 'list'; // or 'coverart'
const theme = 'white'; // or 'white'
  return (
    <div style={containerStyle}>
        <h2>Tune<FontAwesomeIcon icon={faMusic}  size="sm" /></h2>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>

        <SpotifyPlayer
        uri={play}
         size={size}
        view={view}
      theme={theme} 

/>
    </div>
    </div>
  )
}
