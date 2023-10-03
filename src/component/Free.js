import React from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import {Row, Col} from 'react-bootstrap';
import '../style/free.css'
import NavComp from './NavComp';

const Free = () => {
    const [items,setItems] =useState([
        {
            id: "1",
            title: "Mystic Melodies",
            price: "42",
            no: '5',
            imageSrc: 'https://i.ytimg.com/vi/3mytCl9L2Mk/maxresdefault.jpg',
            ratings: 4.8,
            numReviews: 20,
          },
        {
            id:"2",
            title:"Rhythms of Reflection",
            price:"42",
            no:'5',
            imageSrc:'https://www.ssje.org/wp-content/uploads/2018/06/Monastic-Wisdom-Rhythm.png',
            ratings: 4.8,
            numReviews: 20,
        },
        {
            id:"3",
            title:"Celestial Harmony",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 20,
            imageSrc:'https://c1.wallpaperflare.com/preview/780/377/277/photos-harmony-melody-moon.jpg'
        },
    ])
  return (
    <>
        <NavComp />
        <div className='product' style={{margin:'20px'}}>
            <h1 align="center">Welcome to !</h1>
            <Row xs={1} md={4} className='g-4'>{
                items.map((product) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                        product={product} 
                        items={items}
                        setItems={setItems}
                        />
                    </Col>
                ))
            }
            </Row>
        </div>
    </>
  )
}

export default Free