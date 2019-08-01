import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import PosterPage from './pages/poster-page/poster-page.component';
import ReferencesPage from './pages/references-page/references-page.component';
import SampleAudioPage from './pages/sample-audio-page/sample-audio-page.component';
import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';
import './App.css';
import ExecutiveSummaryPage from './pages/executive-summary-page/executive-summary-page.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/poster' component={PosterPage} />
          <Route exact={true} path='/references' component={ReferencesPage} />
          <Route exact={true} path='/sample_audio' component={SampleAudioPage} />
          {/* <Route exact={true} path='/executive_summary' component={ExecutiveSummaryPage} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;
