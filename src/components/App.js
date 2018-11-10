import React, { Component } from 'react';
import Question from './question/Question';
import './App.scss';

import questions from '../questions.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions,
      position: 0
    };
    //TODO json decode and store as state
    //TODO store current position as state (?)
    //TODO move to redux store instead
  }

  showNextQuestion() {
    let { position, questions } = this.state;
    position++;
    if (position >= questions.length) {
      position = 0;
    }

    this.setState({
      position
    });
  }

  render() {
    return (
      <Question question={this.state.questions[this.state.position]} onAnswer={this.showNextQuestion.bind(this)}/>
    );
  }
}

export default App;
