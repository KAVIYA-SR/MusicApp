// import { useState } from 'react';
import { useContext } from 'react';
import {Card , Button, CardImg} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import Data from '../context/Data';
import Audio from './Audio';
function ProductCard({items,setItems,product,myitems,setMyitems}){
    const {view} =useContext(Data);
    const read = ({id}) =>{
        console.log("read");
        <Audio id={id}/>
    }
    const Change = (id) => {
       
        const updatedItem = items.find(item => item.id === id);
    
        if (updatedItem) {
            setItems(prevItems => prevItems.filter(item => item.id !== id));
            setMyitems(prevMyItems => [...prevMyItems, updatedItem]);
        }
    };
    const image ={
        minHeight:'200px',
        maxHeight:'200px',
        maxWidth:'100%'
    }
    const onToken =(token,id) =>{
        Change(id);
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
                <Card.Text>Price : ${product.price}</Card.Text>
                <StripeCheckout 
                    token={(token)=>onToken(token,product.id)}
                    stripeKey='pk_test_51NriDdSENiy9WjOrj37NlXxg1R1iM5QyuYDKqQ2hbxaKBTRNlHcul6X68nBVjpYPRqEXCloRxTEBB6onI9yaNoSc00scU5LYig'
                    ><Button style={{display: view ?'block':'none'}} >Add To MyList</Button></StripeCheckout>
                    <Button style={{display: !view?'block':'none'}} onClick={read}> View </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
