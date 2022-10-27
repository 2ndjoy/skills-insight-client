import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    const { title, img, details, rating, author_name } = course;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div>
                        <p className='fw-bold'>Instructor: <span> {author_name}</span></p>
                    </div>
                    <div className='my-2 d-flex align-items-center gap-1'>
                        <FaStar></FaStar> {rating}
                    </div>

                    <Link to='/subscription'><Button variant="primary">Get premium access</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCard;