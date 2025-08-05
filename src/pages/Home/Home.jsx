import React from 'react';
import NewsletterSignup from './Section/NewsletterSignup';
import LatestSection from './Section/LatestSection';
import Startups from './Section/Startups';

const Home = () => {
    return (
        <div>
            <NewsletterSignup></NewsletterSignup>
            <LatestSection></LatestSection>
            <Startups></Startups>
        </div>
    );
};

export default Home;