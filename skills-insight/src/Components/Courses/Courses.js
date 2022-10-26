import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import CourseCard from './CourseCard';
// import CourseCard from './CourseCard';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Courses.css'
import Button from 'react-bootstrap/Button';




const Courses = () => {
    const categoryCourses = useLoaderData();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <Container className='d-flex mx-5 my-5'>
            <Row >
                <Col>
                    <div className='catagory-container'>
                        {
                            categoryCourses.map(courses => <Link className=' text-decoration-none' to={`/catagories/courses/${courses.id}`}> <p className='grid border border-primary rounded p-2'>{courses.name}</p></Link>)
                        }
                    </div>
                </Col>
                <Col sm={8}>

                    <div className='grid-container'>
                        {
                            categories.map(category => <CategoryCard
                                key={category.id}
                                category={category}>

                            </CategoryCard>)
                        }
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Courses;