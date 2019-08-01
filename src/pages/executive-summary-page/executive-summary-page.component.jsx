import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const ExecutiveSummaryPage = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Here are the Executive Summary slides from our project</h1>
            </Jumbotron>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRy1AoLSO872ij0cDN4MKx_0UIEC6RdHZ9qq0lY3phxWtw-aySKnXcnM2AnpveDCU9SrfXfS9Xs4kWo/embed?start=false&loop=true&delayms=60000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style={{width: "100%", height: "600px"}}></iframe>
        </div>
    )
};

export default ExecutiveSummaryPage;