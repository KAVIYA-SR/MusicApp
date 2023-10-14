
import {Card ,Button, CardImg } from 'react-bootstrap';
import {  useContext } from 'react';
import Data from '../context/Data';
import { Link } from 'react-router-dom';

function ProductCard({product}){
    // const list =songs;
    const {songs,setPlay} =useContext(Data);
    const go = (id) => {
       
        
        const song = songs.find((item) => item.id === id); 
        setPlay(song.playList)
        console.log(song)
    };
    
    
    const image ={
        minHeight:'270px',
        maxHeight:'270px',
        maxWidth:'100%'
    }
    
    return(
        <Card>
            <CardImg style={image} src={product.imageSrc}/>
            <Card.Body style={{maxHeight:'300px',minHeight:'250px'}}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Number of songs : {product.no}</Card.Text>
                <Card.Text>
                     Average Rating: {product.ratings}
                    <br />
                    Number of Reviews: {product.numReviews}
                </Card.Text>
                <Button id='tag1' onClick={() => go(product.id)}><Link to='/freeplaylist'>View</Link> </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
