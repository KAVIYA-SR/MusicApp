
import {Card ,Button, CardImg} from 'react-bootstrap';

function ProductCard({product}){
    
    const image ={
        minHeight:'200px',
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
                <Button id='tag1'>View</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
