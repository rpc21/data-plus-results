import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Sound from '../sound/sound.component';
import './sound-list.styles.scss';

const SoundList = ({ soundData, displayInformation, emotion }) => {
    return (
        <div>
            {/* <p> {displayInformation} </p> */}
            <Row>
                <Col><h3 className='emotion-label'>{emotion}</h3></Col>
                {soundData.map(sound => <Sound wavFile={sound.soundUrl} word={sound.word}></Sound>)}
            </Row>
        </div>
    );
}

export default SoundList;