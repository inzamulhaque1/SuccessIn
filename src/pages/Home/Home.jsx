import React from 'react';
import NewsletterSignup from './Section/NewsletterSignup';
import LatestSection from './Section/LatestSection';
import Startups from './Section/Startups';
import AI from './Section/AI';

const Home = () => {
    return (
        <div>
            <NewsletterSignup></NewsletterSignup>
            <LatestSection></LatestSection>
            <Startups></Startups>
            <AI></AI>
        </div>
    );
};

export default Home;