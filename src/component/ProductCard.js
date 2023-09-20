// import { useState } from 'react';
import {Card , Button, CardImg} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
function ProductCard({items,setItems,product,myitems,setMyitems}){
    const Change = (id) => {
        const updatedItem = items.find(item => item.id === id);
    
        if (updatedItem) {
            setItems(prevItems => prevItems.filter(item => item.id !== id));
            setMyitems(prevMyItems => [...prevMyItems, updatedItem]);
        }
    };
    
    const onToken =(token,id) =>{
        Change(id);
    }
    return(
        <Card>
            <CardImg src={product.imageSrc}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <StripeCheckout 
                    token={(token)=>onToken(token,product.id)}
                    stripeKey='pk_test_51NriDdSENiy9WjOrj37NlXxg1R1iM5QyuYDKqQ2hbxaKBTRNlHcul6X68nBVjpYPRqEXCloRxTEBB6onI9yaNoSc00scU5LYig'
                    ><Button>click</Button></StripeCheckout>
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard
