import React from 'react';
import { navigate } from 'gatsby';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'

export const FormContact = () => {

    //Submit form function
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => navigate('../thanks'))
        .catch(error => alert(error));
    }


    return (
        <Form
            method='post'
            name='contactForm'
            action='/thanks/'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value='contactForm' />
            <Row className='mb-3'>
                <Col md="6">
                    <FloatingLabel label="Nom" className='text-black'>
                        <Form.Control 
                        required 
                        name='name' 
                        id='name' 
                        className='text-black mb-2' 
                        type='text' 
                        placeholder='Nom' 
                        maxLength='50'
                        minLength='1'
                        pattern='[A-Z]{1}[a-z]+'
                        />
                    </FloatingLabel>
                </Col>
                <Col md="6">
                    <FloatingLabel label="Prénom" className='text-black'>
                        <Form.Control 
                        required 
                        name='firstname' 
                        id='firstname' 
                        className='text-black mb-2' 
                        type='text' 
                        placeholder='Prénom' 
                        maxLength="50"
                        minLength="1"
                        pattern='[A-Z]{1}[a-z]+'
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col md="6">
                    <FloatingLabel label="Téléphone" className='text-black'>
                        <Form.Control 
                        required 
                        name='phone' 
                        id='phone' 
                        className='text-black mb-2' 
                        type='tel' 
                        placeholder='Téléphone'
                        maxLength="10"
                        pattern='[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}'/>
                    </FloatingLabel>
                </Col>
                <Col md="6">
                    <FloatingLabel label="E-mail" className='text-black'>
                        <Form.Control 
                        required 
                        name='email' 
                        id='email' 
                        className='text-black mb-2' 
                        type='email' 
                        placeholder='E-mail'
                        maxLength="50"
                        pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel label="Votre message..." className='text-black'>
                        <Form.Control required name='message' id='message' className='text-black mb-3' as='textarea' style={{height: '200px'}} placeholder='Votre message...' />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col className='d-flex justify-content-end'>
                    <Button className='mb-3' type='submit' variant='outline-light'>Envoyer</Button>
                </Col>
            </Row>
        </Form>
    )
}
