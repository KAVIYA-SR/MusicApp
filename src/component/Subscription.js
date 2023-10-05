import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/subs.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import StripeCheckout from 'react-stripe-checkout';
import Data from '../context/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavComp from './NavComp';

function Subscription() {
  const {view,setView,view1,setView1} =useContext(Data);
  const onToken =(token,data) =>{
    console.log(data);
    if(data==="setView1")
      setView1(!view1);
    else
      setView(!view);
  }
  
  return (
    <div className='mainn'>
       <NavComp />
    <p id='plan'>Plans & Pricing</p>
    <p id='fea'>Simple pricing and Advanced features for Your music experince</p>
    <div className='Prices'>
    <div id='card'>
    <Card style={{ width: '19rem', height:'450px'}}>
    <Button id='tag'>24/7</Button>
      <Card.Body>
        <Card.Title><h1>Free</h1></Card.Title>
        <Card.Text id='subsc'>
         "Free music subscription: Unlimited access, endless tunes."
        </Card.Text>
        <Card.Text>
            <ul>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />   Unlimited Users</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  Simliar Tracks</li>
           
            </ul>
        </Card.Text>
        <Button id='tag1'><Link to='/Free' style={{textDecoration:'none',color:'black'}} >Listen Music</Link></Button>
      </Card.Body>
    </Card>
    </div>
   <div id='card1'>
    <Card style={{ width: '20rem', height:'520px'}}>
    <Button id='tag'>Monthly</Button>
      <Card.Body>
        <Card.Title><h1 style={{textDecoration : !view1 ? ' line-through':'none'}}>$24.55</h1></Card.Title>
        <Card.Text id='subsc'>
         "Monthly subscription: Premium music, exclusive access."
        </Card.Text>
        <Card.Text>
            <ul>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />   Unlimited Users</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  Simliar Tracks</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" /> 28 days free Access</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  5+ playlists..</li>
           
            </ul>
        </Card.Text>
        <StripeCheckout
          token={(token)=>onToken(token,"setView1")}
         stripeKey='pk_test_51NriDdSENiy9WjOrj37NlXxg1R1iM5QyuYDKqQ2hbxaKBTRNlHcul6X68nBVjpYPRqEXCloRxTEBB6onI9yaNoSc00scU5LYig'>
        <Button style={{display: view1 ?'block':'none'}} id='tag1'>Pay $24.55</Button></StripeCheckout>
        <Button style={{display: !view1 ?'block':'none'}} id='tag1'><Link to='' style={{textDecoration:'none',color:'black'}} >Listen Music</Link></Button>
      </Card.Body>
    </Card>
    </div>
    <div id='card2'>
    <Card style={{ width: '20rem', height:'600px'}}>
    <Button id='tag'>Yearly</Button>
      <Card.Body>
        <Card.Title><h1 style={{textDecoration : !view ? ' line-through':'none',filter : !view ? 'blur(3px)':'none'}}>$48.55</h1></Card.Title>
        
        <Card.Text id='subsc'>
         "Yearly subscription: Uninterrupted music, incredible value."
        </Card.Text>
        <Card.Text>
            <ul>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />   Unlimited Users</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  Simliar Tracks</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  No Repeated Music</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  Offline Music</li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  365+ 24 days free access </li>
            <li> <FontAwesomeIcon icon={faCheck}  size="md" />  10+ playlists..</li>
          
            </ul>
        </Card.Text>
        <StripeCheckout
          token={(token)=>onToken(token,"setView")}
         stripeKey='pk_test_51NriDdSENiy9WjOrj37NlXxg1R1iM5QyuYDKqQ2hbxaKBTRNlHcul6X68nBVjpYPRqEXCloRxTEBB6onI9yaNoSc00scU5LYig'>
        <Button style={{display: view ?'block':'none'}} id='tag1'>Pay $48.55</Button></StripeCheckout>
        <Button style={{display: !view?'block':'none'}} id='tag1'><Link to='' style={{textDecoration:'none',color:'black'}} >Listen Music</Link></Button>
      </Card.Body>
    </Card>
    </div>
   
    </div>
    </div>
  );
}

export default Subscription;