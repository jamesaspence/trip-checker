import React, { Component } from 'react';
import './Question.scss';

class Question extends Component {
    render() {
        return (
            <div className="question-container">
                <h1 className="question">
                    Test Question
                </h1>
                <div className="buttons-container">
                    <a href="#" className="button yes">Yep!</a>
                    <a href="#" className="button no">S#$%</a>
                </div>
            </div>
        );
    }
}

export default Question;
