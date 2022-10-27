import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import Container from 'react-bootstrap/esm/Container';

const SubscriptionCard = ({ pack }) => {
    const { id, price, inside, title, facilities } = pack;
    const handleToast = () => {
        toast.success('Successfully Purchased!')
    }
    return (
        <Container className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Header className='text-success fw-bold'>{title}</Card.Header>
                <Card.Body>
                    <Card.Title className='text-success'>Price: ${price}/monthly</Card.Title>
                    <Card.Text className='text-success'>
                        {facilities}
                    </Card.Text>
                    <Link to='/proced'><Button onClick={handleToast} variant="outline-success">Buy</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SubscriptionCard;