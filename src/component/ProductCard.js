
import {Card ,Button, CardImg } from 'react-bootstrap';
import {  useContext } from 'react';
import Data from '../context/Data';
import { Link } from 'react-router-dom';

function ProductCard({product,songs}){
    // const list =songs;
    const {text,setText,setList,list} =useContext(Data);
    const go = (id) => {
        console.log(list)
        if(songs){
        const song = songs.find((item) => item.id === id); 
        // console.log(song.track);
        if (song && song.track) {
        //    console.log(song.track)
           setList(song.track);
        }
        setText(!text);
        }
        else
            console.log("no")
        console.log(id)
        console.log(list)
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
