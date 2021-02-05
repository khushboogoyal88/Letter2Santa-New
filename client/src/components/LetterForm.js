import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LetterForm = ({ submit, change }) => {
    return (
        <Form onSubmit={submit}>
        <Row form className="pt-4">
        <Col md={6}>
        <FormGroup >
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="fullname" required onChange={change} placeholder="What is your name?" />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="examplePassword">How old are you?</Label>
        <Input type="number" name="age" required onChange={change} placeholder="in number" />
        </FormGroup>
        </Col>
        </Row>
        <FormGroup className="pt-3">
        <Label for="exampleAddress">What gift do you want?</Label>
        <Input type="text" name="present" required onChange={change} placeholder="Like a toy/Barbie or Book" />
        </FormGroup>
        <FormGroup className="pt-3">
        <Label for="exampleAddress">Your image URL</Label>
        <Input type="text" name="pic" required onChange={change}/>
        </FormGroup>
        <FormGroup className="pt-3">
        <Label for="exampleAddress2">Your message to Santa</Label>
        <Input type="textarea" name="message" required onChange={change} style={{ height: "200px" }} placeholder="Dear Santa" />
        </FormGroup>
        <FormGroup check className="pt-3">
        <Input type="checkbox" name="isNice"
        onChange={change}/>
        <Label for="exampleCheck" check>Have you been nice this year?</Label>
        </FormGroup>
        <Button className="mt-3 mb-2">Send</Button>
        </Form>
        );
    }
    
    export default LetterForm;