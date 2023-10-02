import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/subs.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faMusic} from '@fortawesome/free-solid-svg-icons';
function Subscription() {
  return (
    <div className='mainn'>
        <h1>Tune<FontAwesomeIcon icon={faMusic}  size="sm" /></h1>
    <p id='plan'>Plans & Pricing</p>
    <p id='fea'>Simple pricing and Advanced features for Your music experince</p>
    <div className='Prices'>
    <div id='card'>
    <Card style={{ width: '23rem', height:'500px'}}>
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
        <Button id='tag1'>Listen Music</Button>
      </Card.Body>
    </Card>
    </div>
   <div id='card1'>
    <Card style={{ width: '23rem', height:'620px'}}>
    <Button id='tag'>Monthly</Button>
      <Card.Body>
        <Card.Title><h1>$24.55</h1></Card.Title>
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
        <Button id='tag1'>Pay $24.55</Button>
      </Card.Body>
    </Card>
    </div>
    <div id='card2'>
    <Card style={{ width: '23rem', height:'720px'}}>
    <Button id='tag'>Yearly</Button>
      <Card.Body>
        <Card.Title><h1>$48.55</h1></Card.Title>
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
        <Button id='tag1'>Pay $48.55</Button>
      </Card.Body>
    </Card>
    </div>
   
    </div>
    </div>
  );
}

export default Subscription;