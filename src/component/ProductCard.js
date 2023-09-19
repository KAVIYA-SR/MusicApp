import { useState } from 'react';
import {Card} from 'react-bootstrap';

function ProductCard(props){
    const product =props;
    // const [val,setVal] =useState('Click')
    // function set(){

    // }
    return(
        <div>
            <Card>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Button onClick='set()' >click</Card.Button>
            </Card>
        </div>
    )
}

export default ProductCard
