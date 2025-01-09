import React, { useState } from 'react';
import { getCorrection } from './api'

class AutocorrectTextarea extends React.Component {
  state = {
    text: ''
  };

  handleWordCorrection = async () => {
    const { text } = this.state;
    const words = text.split(' ');
    const lastWord = words[words.length - 1].toLowerCase();
    const correctedWord = await getCorrection(lastWord);

    if (!correctedWord) return;

    const {text: newText} = this.state
    const newWords = newText.split(' ');
    newWords[words.length - 1] = correctedWord;

    this.setState({ text: newWords.join(' ') });
  };

  handleChange = ({ target: { value } }) => {

    this.setState({ text: value });

    if (value.endsWith(' ')) {
      this.handleWordCorrection();
    }

  };

  render() {
    return (
      <div className="text-center">
        <textarea 
          data-testid="textarea"
          rows={10}
          cols={80}
          className="card"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AutocorrectTextarea;

// Functional Component
export function AutoCorrectText() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const value = e.target.value
    if (value.endsWith(' ')) {
      handleWordCorrection();
    }
    setText(value);
  }

  const handleWordCorrection = async () => {
    const words = text.split(' ');
    const lastWord = words[words.length - 1];
    const correctedWord = await getCorrection(lastWord);

    if (correctedWord) {
      setText(prevText => {
        const newWords = prevText.split(' ');
        newWords[words.length - 1] = correctedWord;
        return newWords.join(' ');
      })
    }
  }
  
  return (
    <div className="text-center">
      <textarea 
        data-testid="textarea"
        rows={10}
        cols={80}
        className="card"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}