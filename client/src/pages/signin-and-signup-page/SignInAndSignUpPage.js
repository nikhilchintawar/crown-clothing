import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

import { SignInSignUpPageContainer } from './signinsignup.styles';

const SignInAndSignUpPage = () => {
    return (
        <div>
            <SignInSignUpPageContainer>
                <SignIn />
                <SignUp />
            </SignInSignUpPageContainer>
        </div>
    );
};

export default SignInAndSignUpPage;