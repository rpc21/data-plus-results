import microsoft_elt from '../assets/images/microsoft-elt.PNG';
import asr_rnn from '../assets/images/asr_rnn.PNG';
import discriminative_features from '../assets/images/discriminative_features.PNG';
import interaction_aware_learning from '../assets/images/interaction_aware_learning.PNG';
import hierarchical_generative_modeling from '../assets/images/hierarchical_generative_modeling.PNG';
import iemocap from '../assets/images/iemocap.PNG';
import natural_tts from '../assets/images/natural_tts.PNG';
import toronto from '../assets/images/toronto.PNG';

const REFERENCE_DATA = [
    {
        citation: '1. C. Busso, M. Bulut, C.C. Lee, A. Kazemzadeh, E. Mower, S. Kim, J.N. Chang, S. Lee, and S.S. Narayanan, "IEMOCAP: Interactive emotional dyadic motion capture database," Journal of Language Resources and Evaluation, vol. 42, no. 4, pp. 335-359, December 2008.',
        image_path: iemocap,
        paperUrl: 'https://sail.usc.edu/iemocap/Busso_2008_iemocap.pdf'
    },
    {
        citation: '2. D. Dai, Z. Wu, R. Li, X. Wu, J. Jia and H. Meng, "Learning Discriminative Features from Spectrograms Using Center Loss for Speech Emotion Recognition," ICASSP 2019 - 2019 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), Brighton, United Kingdom, 2019, pp. 7405-7409.',
        image_path: discriminative_features,
        paperUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8683765'
    },
    {
        citation: '3. K. Dupuis, M.K. Pichora-Fuller, "Toronto emotional speech set (TESS)," University of Toronto, Psychology Deparment, 2010.',
        image_path: toronto,
        paperUrl: "https://tspace.library.utoronto.ca/handle/1807/24487"
    },
    {
        citation: '4. K. Han, D. Yu, and I. Tashev, "Speech emotion recognition using deep neural network and extreme learning machine," in Proc. Interspeech, 2014, pp. 223–227.',
        image_path: microsoft_elt,
        paperUrl: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/IS140441.pdf'
    },
    {
        citation: '5. Hsu, Wei-Ning, et al. “Hierarchical Generative Modeling for Controllable Speech Synthesis.” ArXiv:1810.07217 [Cs, Eess], Oct. 2018. arXiv.org, http://arxiv.org/abs/1810.07217.',
        image_path: hierarchical_generative_modeling,
        paperUrl: 'https://arxiv.org/pdf/1810.07217.pdf'

    },
    {
        citation: '6. S. Mirsamadi, E. Barsoum, and C. Zhang, “Automatic speech emotion recognition using recurrent neural networks with local attention,” in Proc. IEEE Int. Conf. Acoust. Speech Signal Process., New Orleans, LA, USA., Mar. 2017, pp. 2227–2231.',
        image_path: asr_rnn,
        paperUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7952552'
    },
    {
        citation: '7. Shen, Jonathan, et al. “Natural TTS Synthesis by Conditioning WaveNet on Mel Spectrogram Predictions.” ArXiv:1712.05884 [Cs], Dec. 2017. arXiv.org, http://arxiv.org/abs/1712.05884.',
        image_path: natural_tts,
        paperUrl: 'https://arxiv.org/pdf/1712.05884.pdf'
    },
    {
        citation: '8. S. Yeh, Y. Lin and C. Lee, "An Interaction-aware Attention Network for Speech Emotion Recognition in Spoken Dialogs," ICASSP 2019 - 2019 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), Brighton, United Kingdom, 2019, pp. 6685-6689.',
        image_path: interaction_aware_learning,
        paperUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8683293'
    },
];

export default REFERENCE_DATA;