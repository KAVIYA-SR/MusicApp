import {Row,Col} from 'react-bootstrap';
import { ProductArray } from './Product';

function Store() {
    return(
        <>
            <h1>Welcome to Store!</h1>
            <Row xs={1} md={4} className='g-4'>
                {
                    ProductArray.map((product,idx) =>{
                        <Col align="Center">
                            <h1>product</h1>
                        </Col>
                    })
                }
            </Row>
        </>
    )
}

export default Store