
import {Card ,Button, CardImg } from 'react-bootstrap';
import {  useContext } from 'react';
import Data from '../context/Data';
import { Link } from 'react-router-dom';
import '../style/productcard.css'
function ProductCard({product}){
    // const list =songs;
    const {songs,setPlay} =useContext(Data);
    const go = (id) => {
       
        
        const song = songs.find((item) => item.id === id); 
        setPlay(song.playList)
        console.log(song)
    };
    
    
    const image ={
        minHeight:'270px',
        maxHeight:'270px',
        maxWidth:'100%'
    }
    
    return(
        <div className='card'>

        
        <div className='nn' style={{display:'flex',justifyContent:'space-between'}}>
        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={product.imageSrc} />
     
        <Card.Body id='cardbg'>
            <div style={{display:'flex',flexDirection:'row'}}> <Card.Title><h3>{product.title}</h3></Card.Title>
           
            </div>
            <hr/>
            <Card.Text>Number of songs : {product.no}</Card.Text>
            <Card.Text>
            Average Rating: {product.ratings}
                    <br />
                    Number of Reviews: {product.numReviews}
            </Card.Text>
            {/* <Button style={{display:!pay?'block':'None',backgroundColor:'#E5F9F4',border:'none',color:'#426259'}}>
                <FontAwesomeIcon icon={faCartShopping} style={{fontWeight:'20px',cursor: 'pointer',marginLeft:'7px'}}/> ADD TO CART</Button> */}

            
<Button id='tag1' onClick={() => go(product.id)}><Link to='/freeplaylist'>View</Link> </Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        
    )
}

export default ProductCard
