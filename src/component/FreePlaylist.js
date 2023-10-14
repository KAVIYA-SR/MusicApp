import React, {useContext} from 'react'
import {Row, Col} from 'react-bootstrap';
import '../style/free.css'

import Data from '../context/Data';
import SongCard from './SongCard';
import Player from './Player';

export default function FreePlaylist() {
    const {text,items,songs,list} =useContext(Data);
  return (

<div className='product' style={{margin:'20px'}}>
            <h1 align="center">Enjoy By Hearing Free Music!</h1>
            <Row xs={1} md={4} className='g-4'>{
                list.map((product) =>(
                    <Col align="center" key={product.songid}>
                        {/* <Player/> */}
                    </Col>
                ))
            }
            </Row>
            <Player/>
        </div>
  )
  
}
