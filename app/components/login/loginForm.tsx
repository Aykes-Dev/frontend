'use client'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import singIn from '../action/login';
import { useState } from 'react';

export default function LoginForm() {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handlerSubmit = () => {
        singIn(username, password)
    }

  return (
    <Container className='m-auto p-20'>
        <Row>
            <Col className='m-auto p-3 border border-secondary rounded' xs={12} md={6}>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Login</Form.Label>
            <Form.Control placeholder="Enter login" value={ username } onChange={(e) => setUsername(e.target.value) }/>
            <Form.Text className="text-muted">
            We'll never share your login with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
                value={ password }
                onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="secondary" onClick={ handlerSubmit }>
            SingIn
        </Button>
        <Button variant="secondary" className='ms-3'>
            SingUp
        </Button>
        </Form>
            </Col>
        </Row>
    </Container>
  );
}
