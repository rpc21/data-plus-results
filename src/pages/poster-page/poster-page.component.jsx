import React from 'react';
import './poster-page.styles.scss';
import poster from '../../assets/images/Poster.png';

import { Image } from 'react-bootstrap';

const PosterPage = () => {
    return <Image src={poster} className="poster"/>;
};


export default PosterPage;