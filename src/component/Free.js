import React, { useState } from 'react'
import ProductCard from './ProductCard'
import {Row, Col} from 'react-bootstrap';
import '../style/free.css'
import NavComp from './NavComp';

const Free = () => {
    const [items,setItems] =useState([
        {
            id: "1",
            title: "Titanic",
            no: '5',
            imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',
            ratings: 4.8,
            numReviews: 200,
          },
        {
            id:"2",
            title:"Avatar",
            price:"42",
            no:'5',
            imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
            ratings: 4.8,
            numReviews: 250,
        },
        {
            id:"3",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU'
        },
    ])
    const songs =[
        {
            id:'1',
            track :[
                {songid:'1',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'}
            ]
        },
        {
            id:'2',
            track :[
                {songid:'5',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'}
            ]
        },
        {
            id:'3',
            track :[
                {songid:'7',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'}
            ]
        }
    ]
  return (
    <>
        <NavComp />
        <div className='product' style={{margin:'20px'}}>
            <h1 align="center">Enjoy By Hearing Free Music!</h1>
            <Row xs={1} md={4} className='g-4'>{
                items.map((product) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                        product={product} 
                        items={items}
                        setItems={setItems}
                        songs={songs}
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