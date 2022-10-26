import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='bgbg text-right p-5'>
            <h2 className='text-4xl purple fw-bolder my-5'>
                Learn what you want <br />
                with free and budget friendly subscription
                <br /> <br />
                Upgrade your
                <br />skills <br />
                with us
            </h2>
            <div className=' text-center mt-5 p-5'>
                <h4 className='text-warning text-2xl fw-bolder '>
                    We have best teacher who will help you
                    <br />
                    to achieve your essential skills
                </h4>
            </div>
            <div className='d-flex justify-content-center gap-3'>
                <Link to='/courses'><button className='btn btn-success mb-t text-2xl'>Explore our courses</button></Link>
                <Link to='/subscription'><button className='btn btn-success mb-t text-2xl'>Explore our Packages</button></Link>
            </div>

        </div>
    );
};

export default Home;