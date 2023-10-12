
import {Card ,Button, CardImg } from 'react-bootstrap';
import {  useContext } from 'react';
import Data from '../context/Data';

function ProductCard({product,songs}){
    // const list =songs;
    const {text,setText,setList} =useContext(Data);
    const go = (id) => {
        
        if(songs){
        const song = songs.find((item) => item.id === id); 
        console.log(song.track);
        if (song && song.track) {
           console.log(song.track)
           setList(song.track);
        }
        setText(!text);
        }
        else
            console.log("no")
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
                <Button id='tag1' onClick={() => go(product.id)}>View</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
