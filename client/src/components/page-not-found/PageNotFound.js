import React from 'react';
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from "./page-not-found.styles";


const PageNotFound = () => {
    return (
        <ErrorImageOverlay>
            <ErrorImageContainer imageUrl="https://i.imgur.com/Q2BAOd2.png" />
            <ErrorImageText>Sorry this page is broken.</ErrorImageText>
        </ErrorImageOverlay>    
    );
};

export default PageNotFound;