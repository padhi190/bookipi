import React from 'react';

class AutocorrectTextarea extends React.Component {
  state = {
    text: ''
  };

  handleWordCorrection = (text) => {
    const words = text.trim().split(' ');
    const lastWord = words[words.length - 1].toLowerCase();
    const correctedWord = this.props.corrections[lastWord];

    if (!correctedWord) return text;

    words[words.length - 1] = correctedWord;
    return words.join(' ') + ' ';
  };

  handleChange = ({ target: { value } }) => {
    const newText = value.endsWith(' ') 
      ? this.handleWordCorrection(value)
      : value;

    this.setState({ text: newText });
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
