import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { img, details, title } = category;
    return (
        <div className='d-flex'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to='/subscription'>
                        <Button variant="primary">Start Learning</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoryCard;