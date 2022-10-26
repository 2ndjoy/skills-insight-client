import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useLoaderData } from 'react-router-dom';

const SubscriptionCard = ({ pack }) => {
    const { id, price, inside, title } = pack;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header className='text-success fw-bold'>{title}</Card.Header>
                <Card.Body>
                    <Card.Title className='text-success'>Price: ${price}</Card.Title>
                    <Card.Text className='text-success'>
                        {inside}
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SubscriptionCard;