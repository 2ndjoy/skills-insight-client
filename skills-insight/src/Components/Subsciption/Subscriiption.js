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
            <h2>Subscription</h2>
            {
                packagesForSubscription.map(pack => <SubscriptionCard
                    key={pack.id}
                    pack={pack}></SubscriptionCard>)
            }

        </div>
    );
};

export default Subscriiption;