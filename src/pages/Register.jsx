import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { checkDataForm } from '../utils/checkData';



function Register() {
  
    function validateForm(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries())
        if(checkDataForm(data)){
            
        }
    }

  return (
    <Container className='p-5'>
            <Row className='justify-content-center'>
                <Col xs={12} lg={6}>
                    <Form onSubmit={validateForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' required/>
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Conferma Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='repeatPassword' required/>
                        </Form.Group>
                        
                        <Button variant="primary" type='submit'>
                            Submit
                        </Button>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
  );
}

export default Register;