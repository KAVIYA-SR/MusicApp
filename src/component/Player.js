import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
export default function Player() {
    const size = {
  width: '30%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
  return (
    <SpotifyPlayer
  uri="https://open.spotify.com/album/3XwgFTxiWxep4s1VjPEaHs"
  size={size}
  view={view}
  theme={theme}
/>
  )
}
