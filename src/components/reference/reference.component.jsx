import React from 'react';
import { Container, thumbnail, Image, Row, Col } from 'react-bootstrap';
import './reference.styles.scss';

const Reference = ({ citation, imageUrl, paperUrl }) => {
    return (
        <div className='reference'>
            <Row>
                <Col xs={4} sm={4} lg={4}>
                    <a href={paperUrl} target='_blank'>
                        <Image src={imageUrl} thumbnail className="preview" />
                    </a>
                </Col>
                <Col>
                    <p>{citation}</p>
                </Col>
            </Row>
        </div>
    );
};

export default Reference;