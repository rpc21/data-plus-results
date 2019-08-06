import React from 'react';
import './sample-audio-page.styles.scss'
import SoundList from '../../components/sound-list/sound-list.component';
import ANGRY_OLD from '../../data/sound-data/angry_old';
import DISGUST_OLD from '../../data/sound-data/disgust_old';
import FEAR_OLD from '../../data/sound-data/fear_old';
import HAPPY_OLD from '../../data/sound-data/happy_old';
import NEUTRAL_OLD from '../../data/sound-data/neutral_old';
import PS_OLD from '../../data/sound-data/ps_old';
import SAD_OLD from '../../data/sound-data/sad_old';
import DISGUST_YOUNG from '../../data/sound-data/disgust_young';
import HAPPY_YOUNG from '../../data/sound-data/happy_young';
import SAD_YOUNG from '../../data/sound-data/sad_young';
import { Jumbotron } from 'react-bootstrap';

const SampleAudioPage = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className='heading'>Check out the samples we generated using our proposed Text-to-Speech model!</h1>
            </Jumbotron>
            <p>We trained our model on data from the <u><a href='https://tspace.library.utoronto.ca/handle/1807/24487'>Toronto Emotional Speech Set (TESS)</a></u>. As per its <u><a href='https://tspace.library.utoronto.ca/handle/1807/24487'>website</a></u>, TESS is "a set of 200 target words spoken in the carrier phrase "Say the word _____' by two actresses (aged 26 and 64 years) portraying each of seven emotions (anger, disgust, fear, happiness, pleasant surprise, sadness, and neutral)." We trained our model separately for each of the speakers and have used our model to produce the audio samples below. Due the limited amount of variety in the words that comprise the dataset, our model struggles to generalize and pronounce words it has never seen before. We hope to improve the generalizability of our model in the future to be able to infuse emotion into any fragment of text, not just those that follow the patterns of this dataset.</p>
            <h1 className='subheading'>Young Female Voice</h1>
            <hr></hr>
            <div>
                <SoundList soundData={DISGUST_YOUNG} displayInformation="Here is sad old" emotion="Disgust" />
            </div>
            <br></br>
            <div>
                <SoundList soundData={HAPPY_YOUNG} displayInformation="Here is sad old" emotion="Happy"/>
            </div>
            <br></br>
            <div>
                <SoundList soundData={SAD_YOUNG} displayInformation="Here is sad old" emotion="Sad"/>
            </div>
            <br></br>
            <h1 className='subheading'>Old Female Voice</h1>
            <hr></hr>
            <div className='samples-table'>
                <SoundList soundData={ANGRY_OLD} displayInformation="Here are samples we generated using an angry old woman's voice" emotion="Angry" />
            </div>
            <br></br>
            <div>
                <SoundList soundData={DISGUST_OLD} displayInformation="Here is sad old" emotion="Disgust"/>
            </div>
            <br></br>
            <div>
                <SoundList soundData={FEAR_OLD} displayInformation="Here is sad old" emotion="Fear"/>
            </div>
            <br></br>
            <div>
                <SoundList soundData={HAPPY_OLD} displayInformation="Here is sad old" emotion="Happy"/>
            </div>
            <br></br>
            <div>
                <SoundList soundData={NEUTRAL_OLD} displayInformation="Here is sad old" emotion="Neutral"/>
            </div>
            <br></br>
            <div>
                <SoundList soundData={PS_OLD} displayInformation="Here is sad old" emotion="Surprise"/>
            </div>
            <br></br>
            <div>
                <SoundList soundData={SAD_OLD} displayInformation="Here is sad old" emotion="Sad"/>
            </div>
        </div>
    );
};

export default SampleAudioPage;