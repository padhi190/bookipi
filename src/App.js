import React, { Component } from 'react';
import './App.css';
import 'h8k-components';

import AutocorrectTextarea, { AutoCorrectText } from './components/AutocorrectTextarea';
const title = "Autocorrection App";

class App extends Component {
  render() {
    const { corrections } = this.props;
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="App">
          <AutocorrectTextarea corrections={corrections} />
          <AutoCorrectText />
        </div>
      </div>
    );
  }
}

export default App;
