
import {Card ,Button, CardImg} from 'react-bootstrap';
import SongCard from './SongCard';

function ProductCard({product,setItems,songs}){
    const songs1=songs;
    const go =(id) =>{
     
        const song =songs1.filter(item => item.id===id);
       
        console.log(song[0].track);
        if (song && song[0].track) {
            const songCards = song[0].track.map(item => (
                <SongCard key={item.id} item={item} />
                ));
                setItems(songCards)
                console.log(songCards);
        }
        
    }
    
    const image ={
        minHeight:'270px',
        maxHeight:'200px',
        maxWidth:'100%'
    }
    
    return(
        <Card>
            <CardImg style={image} src={product.imageSrc}/>
            <Card.Body>
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
