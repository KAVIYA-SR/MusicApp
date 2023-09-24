import {Row, Col} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useState } from 'react';
import NavComp from './NavComp';
function Store () {
    var view=true;
    const [myitems,setMyitems] =useState([])
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
        {
            id:"4",
            title:"Whispers of Tomorrow",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 20,
            imageSrc:'https://cdn.kobo.com/book-images/75633226-d769-446c-86ca-41ad5d03deae/1200/1200/False/whispers-of-tomorrow-2.jpg'
        },
        {
            id:"5",
            title:"Lost in Time",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 20,
            imageSrc:'https://i.scdn.co/image/ab67616d00001e02668acbff05354de0016d5925'
        },
        {
            id:"6",
            title:"Songs of Solitude",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 20,
            imageSrc:'https://m.media-amazon.com/images/I/711tyf6B4GL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id:"7",
            title:"Echoes of Euphoria",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 20,
            imageSrc:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F588007409%2F1723335893793%2F1%2Foriginal.20230901-083735?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=60%2C0%2C1542%2C771&s=578ae0bf34cb7d18dd72daae12302811'
        },
        {
            id:"8",
            title:"Enchanted Journeys",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 20,
            imageSrc:'https://i.scdn.co/image/ab67616d0000b2739a8c1958526a0463e509a863'
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
        <div>
            <h1>My Items</h1>
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
            </div>
        </>
    )
}

export default Store;