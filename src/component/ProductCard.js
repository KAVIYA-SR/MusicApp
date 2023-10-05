import { useState } from 'react';
import {Card ,Button, CardImg ,Row ,Col} from 'react-bootstrap';
import SongCard from './SongCard';

function ProductCard({product,songs}){
   
    const [audio,setAudio]=useState(null);
    const go =(id) =>{
       
        const song =songs.filter(item => item.id===id);
        const val=song[0].track;
        console.log(val);
        if(song){
            setAudio(val);
            console.log(audio);
            {audio && (
                <Row xs={1} md={2}>
                    <Col align="center">
                    <SongCard audio={audio} />
                    </Col>
                </Row>
            )}
        }

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
