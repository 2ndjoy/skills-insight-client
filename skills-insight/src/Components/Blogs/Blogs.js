import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blogs = () => {
    return (

        <div className='mt-5 my-5'>
            <div className='text-primary my-5 text-center'>
                <h3>Here we tried to give some answer of your questions</h3>
                <h3>Please Checkout</h3>
            </div>
            <Accordion className='mt-5 my-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is cors?</Accordion.Header>
                    <Accordion.Body>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase?What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />
                        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives for authentication
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>  What is Node? and How does Node work? </Accordion.Header>
                    <Accordion.Body>
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. <br />
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;