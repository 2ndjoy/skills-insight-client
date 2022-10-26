import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';


const Course = () => {
    const courseS = useLoaderData();
    const [categoryCourses, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <Container className='d-flex mx-5 my-5'>

            <Row >
                <Col>
                    <div>
                        {
                            categoryCourses.map(courses => <Link className=' text-decoration-none' to={`/catagories/courses/${courses.id}`}> <p className='grid border border-primary rounded p-2'>{courses.name}</p></Link>)
                        }
                        <Link to='/courses'><Button>See All Courses</Button></Link>

                    </div>
                </Col>
                <Col sm={8}>
                    <div className='grid-container'>
                        {
                            courseS.map(
                                course =>
                                    <CourseCard
                                        key={course.id}
                                        course={course}
                                    ></CourseCard>
                            )
                        }
                    </div>
                </Col>
            </Row>


        </Container>

    );
};

export default Course;