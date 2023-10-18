
import {Card ,Button} from 'react-bootstrap';
import {  useContext } from 'react';
import Data from '../context/Data';
import { Link } from 'react-router-dom';
import '../style/productcard.css'
function ProductCard({product,songs}){
    
    const {setPlay,setPlaybg} =useContext(Data);
    const go = (id) => {
       
        
        const song = songs.find((item) => item.id === id); 
        setPlay(song.playList)
        setPlaybg(song.background)
        console.log(song)
    };
    
    return(
        <div className='card'>

        
        <div className='nn' style={{display:'flex',justifyContent:'space-between'}}>
        <Card style={{ width: '23rem'}}>
        <Card.Img variant="top" src={product.imageSrc} style={{width:'100%',height:'300px'}} />
     
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
        <Button id='tag1'  onClick={() => go(product.id)}><Link to='/freeplaylist' style={{color:'black',textDecoration:'none'}}>Play</Link> </Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        
    )
}

export default ProductCard
