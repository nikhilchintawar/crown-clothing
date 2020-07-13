import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

import "./signin-and-signup-page.styles.scss";

const SignInAndSignUpPage = () => {
    return (
        <div>
            <div className='sign-in-and-sign-up'>
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;