import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import PosterPage from './pages/poster-page/poster-page.component';
import ReferencesPage from './pages/references-page/references-page.component';
import SampleAudioPage from './pages/sample-audio-page/sample-audio-page.component';
import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Testing</h1>
        <HashRouter basename='/'>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/data-plus-results/poster' component={PosterPage} />
          <Route exact={true} path='/data-plus-results/references' component={ReferencesPage} />
          <Route exact={true} path='/data-plus-results/sample_audio' component={SampleAudioPage} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
