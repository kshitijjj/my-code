import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding = ({name}) => {
    return (
        <div>
            hey {name} 
            welcome to our website 
            now login to your account to get access to different features
            <Link to="/login">Login Now</Link>
        </div>
    );
}

export default Onboarding;
