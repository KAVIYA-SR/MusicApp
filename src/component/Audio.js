import React from 'react'
import SongCard from './SongCard';
import {Col} from 'react-bootstrap'

const Audio = ({id}) =>{
const id1=id;
const songs =[
    {
        id:1,
        title:"first",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:2,
        title:"Second",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:3,
        title:"thrid",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:4,
        title:"fourth",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:5,
        title:"five",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:6,
        title:"six",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:7,
        title:"seven",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    },
    {
        id:8,
        title:"eight",
        src1:'horse.mp3',
        src2:'horse.mp3',
        src3:'horse.mp3',
        src4:'horse.mp3',
        src5:'horse.mp3',
        src6:'horse.mp3',
    }
]

const filteredSongs = songs.filter(song => song.id === id1);
console.log(filteredSongs);

return (
    <div>
        {filteredSongs.map((product) => (
            <Col align="center" key={product.id}>
                <SongCard
                    product={product}
                />
            </Col>
        ))}
    </div>
);

}

export default Audio;