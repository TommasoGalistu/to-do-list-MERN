import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { checkDataForm } from '../utils/checkData';
import ErrorTextForm from '../pages/ErrorTextForm'
import { useState } from 'react';


function Register() {
    const navigate = useNavigate()
    const [response, setResponese] = useState({
        type: null,
        res: ''
    })
    function validateForm(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries())
        if(checkDataForm(data)){
            addUser(data)
        }
    }

    async function addUser(dataObj){
        const response = await fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(dataObj)
        })
        const data = await response.json();

        if(data.email){
            setResponese(prevRes => {
                return prevRes = {
                    type: true,
                    res: 'Sei registrato'
                }
            })
            const timer = setTimeout(() => {
                navigate('/login')
            }, 3000);
            
        }else{
            setResponese(prevRes => {
                return prevRes = {
                    type: false,
                    res: 'Controlla i dati'
                }
            })
            
        }
        console.log(data)
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
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <ErrorTextForm typeText={response.type}>{response.res}</ErrorTextForm>
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