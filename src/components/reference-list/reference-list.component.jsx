import React from 'react';

import { Container } from 'react-bootstrap';

import REFERENCE_DATA from '../../data/reference-data';
import Reference from '../../components/reference/reference.component'

import './reference-list.styles.scss';


const ReferenceList = () => {
    return (
        <Container className='reference-list'>
            {REFERENCE_DATA.map((data) => { return <Reference citation={data.citation} imageUrl={data.image_path} paperUrl={data.paperUrl} className="reference"/> })}
        </Container>
    );
}

export default ReferenceList;