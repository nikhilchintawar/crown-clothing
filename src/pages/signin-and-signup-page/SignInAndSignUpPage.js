import React from 'react';
import SignIn from '../../components/signin/SignIn';

import "./signin-and-signup-page.styles.scss";

const SignInAndSignUpPage = () => {
    return (
        <div>
            <div className='sign-in-and-sign-up'>
                <SignIn />
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;