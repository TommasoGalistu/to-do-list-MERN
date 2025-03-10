import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login(){
    return (
        <Container className='p-5 '>
            <Row className='justify-content-center'>
                <Col xs={12} lg={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className="mt-3">
                        <Link to="/register">Clicca per Registrarti</Link>
                    </div>
                </Col>
            </Row>
        </Container>
      );
}

export default Login;