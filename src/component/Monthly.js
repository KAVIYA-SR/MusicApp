import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import {Row, Col} from 'react-bootstrap';
import '../style/productcard.css'
import NavComp from './NavComp';
import Data from '../context/Data';

const Monthly = () => {
  const {monthitems,monthsongs} =useContext(Data);
  const songs=monthsongs;
  return (
    <div style={{width:'100%',height:'100%',backgroundImage: 'linear-gradient(to right top, #ffffff, #eff5ff, #d6edfd, #b8e7f4, #9de1e0)'}}>
        <NavComp />
        <h1 align="center">Enjoy Your One Month Pack!</h1>
        <div className='product' style={{margin:'20px'}}>
            
            <Row xs={1} md={4} className='g-4' >{
                monthitems.map((product) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                            product={product} 
                            songs={songs}
                        />
                    </Col>
                ))
            }
            </Row>
        </div>
    </div>
  )
}

export default Monthly