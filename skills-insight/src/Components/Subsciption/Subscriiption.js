import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useLoaderData } from 'react-router-dom';
import SubscriptionCard from './SubscriptionCard';


const Subscriiption = () => {
    const packagesForSubscription = useLoaderData();
    console.log(packagesForSubscription)
    return (
        <div className='my-5 mb-5'>
            <h2 className='text-center my-5'>Our Packages</h2>
            <div className='grid-subscription-container my-5 mb-5'>
                {
                    packagesForSubscription.map(pack => <SubscriptionCard
                        key={pack.id}
                        pack={pack}></SubscriptionCard>)
                }
            </div>
        </div>
    );
};

export default Subscriiption;