import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Login() {
    function handleSubmit(){

    }
  return (
     <Container>
        <Row>
            <Col md={6} className="login__form--container">
                <Form style={{ width:"100%" }}>
                    <h1>Login to your account</h1>
                    
                </Form>
            </Col>
        </Row>
     </Container>
  )
}

export default Login