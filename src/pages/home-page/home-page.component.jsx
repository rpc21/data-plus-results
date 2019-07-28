import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import './home-page.component.scss';


const HomePage = () => {
    return (
        <Jumbotron className='jumbotron'>
            <h1>Welcome to the Speech Emotion Analysis Project</h1>
        </Jumbotron>
    );
}

export default HomePage;