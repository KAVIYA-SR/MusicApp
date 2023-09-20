import {Row, Col} from 'react-bootstrap';
// import { ProductArray} from './Product';
import ProductCard from './ProductCard';
import { useState } from 'react';
import NavComp from './NavComp'
function Store () {
    var view=true;
    const [myitems,setMyitems] =useState([])
    const [items,setItems] =useState([
        {
            id:"1",
            title:"hsf",
            price:"42",
            imageSrc:'https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_640.png'
        },
        {
            id:"2",
            title:"ac",
            price:"42",
            imageSrc:'https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_640.png'
        },
        {
            id:"3",
            title:"c",
            price:"42",
            imageSrc:'https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_640.png'
        },
        {
            id:"4",
            title:"d",
            price:"42",
            imageSrc:'https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_640.png'
        },
    ])

    const changeView =(view) =>{
        view=!view;
    }
    return(
        <>
        <NavComp />
        <div className='items'>
            <h1 align="center">Welcome to !</h1>
            <Row xs={1} md={4} className='g-4'>{
                items.map((product) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                        product={product} 
                        items={items}
                        setItems={setItems}
                        myitems={myitems}
                        setMyitems ={setMyitems}
                        />
                    </Col>
                ))
            }
            </Row>
            </div>
            <h1>my items</h1>
            <Row xs={1} md={4} className='g-4'>{
                myitems.map((product,idx) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                        product={product} 
                        items={items}
                        setItems={setItems}
                        myitems={myitems}
                        setMyitems ={setMyitems}
                        />
                    </Col>
                ))
            }
            </Row>
        </>
    )
}

export default Store;