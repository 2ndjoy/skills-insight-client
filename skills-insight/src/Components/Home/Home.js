import React from 'react';
import { Link } from 'react-router-dom';
import Subscriiption from '../Subsciption/Subscriiption';
import './Home.css';
const Home = () => {
    return (
        <div className='bgbg text-white text-center p-5'>
            <h2 className='text-3xl my-5'>
                Learn what you want <br />
                with free and budget friendly subscription
                <br /> <br />
                Upgrade your
                <br />
                <span className='text-warning'>knowledge</span> <br />
                with us
            </h2>
            <div className='text-white mt-5 p-5'>
                <h4>
                    We have best teacher who will help you
                    <br />
                    to achieve your essential skills
                </h4>
            </div>
            <div className='d-flex justify-content-center gap-3'>
                <Link to='/courses'><button className='btn btn-primary mb-t text-2xl'>Explore</button></Link>
                <Link to='/subscription'><button className='btn btn-primary mb-t text-2xl'>Our Packages</button></Link>
            </div>

        </div>
    );
};

export default Home;