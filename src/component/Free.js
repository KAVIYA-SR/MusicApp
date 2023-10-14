import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import {Row, Col} from 'react-bootstrap';
import '../style/productcard.css'
import NavComp from './NavComp';
import Data from '../context/Data';

const Free = () => {
    const {items} =useContext(Data);
    
  return (
    <>
        <NavComp />
        <h1 align="center">Enjoy By Hearing Free Music!</h1>
        <div className='product' style={{margin:'20px'}}>
            
            <Row xs={1} md={4} className='g-4'>{
                items.map((product) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                            product={product} 
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