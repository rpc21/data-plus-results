import React from 'react';
import { Button, Col } from 'react-bootstrap';

class Sound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.word = props.word
        this.url = props.wavFile;
        this.audio = new Audio(this.url);
    }

    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }

    render() {

        return (
            <Col>
                <Button variant="outline-primary" onClick={this.play}>{`Say the word ${this.word}`}</Button>
            </Col>
        );
    }
}

export default Sound;