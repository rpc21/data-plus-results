import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Image, Container, Row, Col } from 'react-bootstrap';
import ser_goal from '../../assets/images/ser_goal.PNG';
import tts_goal from '../../assets/images/tts_goal.PNG';
import ser_model from '../../assets/images/ser_model.PNG';
import tts_model from '../../assets/images/tts_model.PNG';
import pie_chart from '../../assets/images/iemocap_pie.PNG';
import confusion_matrix from '../../assets/images/confusion_matrix.PNG';
import table from '../../assets/images/table.PNG';
import './home-page.styles.scss';


const HomePage = () => {
    return (
        <div className='home-page'>
            <Jumbotron className='jumbotron'>
                <h1 className='title'>Speech Emotion Analysis</h1>
                {/* <br></br> */}
                <p className='names lead'>Ryan Culhane, Reza Soleimani, Andre Wang, Michael Xue</p>
                <p className='names lead'>Faculty Leads: Dr. Jie Ding, Dr. Vahid Tarokh | Project Manager: Enmao Diao</p>
            </Jumbotron>
            <h2 className='subheading'>Background</h2>
            <hr></hr>
            <p className='text'>From the Google Assistant to Amazon Alexa, the ways humans engage with machines have changed drastically in the past few years. An intriguing next step in making such human-machine interactions more natural is integrating emotion. </p>

            <br></br>
            <h2 className='subheading'>Objectives</h2>
            <hr></hr>

            <p className='text'><strong>1. Speech Emotion Recognition (SER):</strong> recognize the emotion in an utterance </p>

            <Image src={ser_goal} className='goal' />

            <p className='text'><strong>2. Text-to-Speech Synthesis (TTS):</strong> integrate emotion into speech generated from text</p>

            <Image src={tts_goal} className='goal' />

            <h2 className='subheading'>Proposed Models</h2>
            <hr></hr>

            <h3 className='h3'>Speech Emotion Recognition</h3>

            <p className='text'>From a given utterance, we create a handcrafted input by splitting it into equal-length segments and extracting handcrafted features from each segment. We also construct spectrograms with two different frequency resolutions and pass them through a CNN in order to learn features. Each of these inputs are passed through an LSTM, followed by a linear layer. Finally, the outputs are added to classify the emotion. We find that combining handcrafted and learned features raises classification accuracy considerably.</p>

            <Image src={ser_model} className='model' />

            <h3 className='h3'>Text-to-Speech Synthesis</h3>

            <p className='text'>We developed a latent model that uses a variational encoder to learn the latent spaces of different emotions. When samples from the latent space are input into the decoder of the original Tacotron 2 model, which is able to convert text to speech, we are able to incorporate emotion into generated speech.</p>
            <Image src={tts_model} className='model' />

            <br></br>
            <br></br>

            <h2 className='subheading'>Dataset</h2>
            <hr></hr>
            <div>
                <Row>
                    <Col><p className='text'>The IEMOCAP database contains over 12 hours of improvised and scripted speech from professional actors. We trained our recognition model on utterances from four, roughly balanced emotions: neutral, happy, angry, and sad.</p></Col>
                    <Col><Image src={pie_chart} /></Col>
                </Row>
            </div>

            <br></br>

            <h2 className='subheading'>Results</h2>
            <hr></hr>

            <h3 className='h3'>Speech Emotion Recognition</h3>

            <p className='text'>When classifying on the emotions of angry, happy, neutral, and sad, our model outperforms the state of the state of the art models on our dataset</p>

            <Row className='text diagram-title'>
                <Col className='diagram-title'>
                    Confusion Matrix for SER
                </Col>
                <Col className='diagram-title'>
                    Comparison of Results
                </Col>
            </Row>

            <Row>
                <Col className='diagram'>
                    <Image src={confusion_matrix} />
                </Col>
                <Col className='diagram'>
                    <Image src={table} />
                </Col>
            </Row>

            <br></br>
            <br></br>

            <h3 className='h3'>Text-to-Speech Synthesis</h3>

            <p className='text'>Check out the examples of our synthesized speech on the <u><Link to='/sample_audio'>samples page</Link></u></p>

            <br></br>

            <h2 className='subheading'>Next Steps</h2>
            <hr></hr>

            <h3 className='h3'>Speech Emotion Recognition</h3>

            <ul className='text'>
                <li>Implement model with adaptive window length</li>
                <li>Implement recurrent batch normalization and other LSTM variants that handle multi-sequence data</li>
                <li>Apply proposed models for different dataset and compile results for publication</li>
            </ul>

            <h3 className='h3'>Text-to-Speech Synthesis</h3>

            <ul className='text'>
                <li>Experiment with different disentanglement methods to better separate emotions in latent space and control the generation of emotion in speech</li>
                <li>Use generative model to better classify emotion</li>
                <li>Improve the generalizability of our model</li>
            </ul>

        </div >
    );
}

export default HomePage;