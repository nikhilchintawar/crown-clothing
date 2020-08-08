import React from 'react';
import PageNotFound from '../page-not-found/PageNotFound';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        //process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info){
        console.log(error);        
    }

    render(){
        if (this.state.hasErrored) {
            return (
                <PageNotFound />
            )
        }

        return this.props.children
    }

};

export default ErrorBoundary;