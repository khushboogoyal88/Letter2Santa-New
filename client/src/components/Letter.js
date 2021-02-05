import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Letter = ({ id, fullname, age, pic, message, present, removeLetter }) => {
    return (
        <div>
        <Card className="mt-4" >
        <CardImg top width="100%" src={pic} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h5">{fullname} ({age} yrs)</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Present wanted: {present}</CardSubtitle>
        <CardText>Letter: {message}</CardText>
        <Button color="danger" onClick={() => {
            removeLetter(id);
        }}>Gift Sent Already</Button>
        </CardBody>
        </Card>
        </div>
        );
    };
    
    export default Letter;