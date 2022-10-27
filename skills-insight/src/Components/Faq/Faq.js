import React from 'react';
import Footer from '../Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';


const Faq = () => {
    return (
        <div>
            <div className='text-center text-primary my-5 mb-5'>

                <h2>Here are some Frequently Asked Questions by our students</h2>
                <p>Please checkout</p>
            </div>

            <Accordion className='mt-5 my-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Will we get 24/7 support</Accordion.Header>
                    <Accordion.Body>Yes, we have a team,a group who will support you throughout your learning
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How much time you will need to finish the course?</Accordion.Header>
                    <Accordion.Body>
                        It will take about 5 months to complete any courses. You have to put your best effort.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Will I get a certificate If I don't buy premium?</Accordion.Header>
                    <Accordion.Body>
                        Actually, you will need to enroll at least our basic package to get a certificate.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>  Will I get benefits? </Accordion.Header>
                    <Accordion.Body>
                        Of course. You have to put your ultimate effort. We are here for helping you.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;