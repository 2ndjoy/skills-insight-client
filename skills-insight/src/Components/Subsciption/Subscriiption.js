import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useLoaderData } from 'react-router-dom';
import SubscriptionCard from './SubscriptionCard';


const Subscriiption = () => {
    const packagesForSubscription = useLoaderData();
    console.log(packagesForSubscription)
    return (
        <div>
            <h2 className='text-center my-5'>Our Packages</h2>
            <div className='d-flex gap-4 justify-content-center my-5'>
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