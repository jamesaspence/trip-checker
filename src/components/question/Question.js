import React, { Component } from 'react';
import Button from './Button';

import './Question.scss';

class Question extends Component {
    render() {
        return (
            <div className="question-container">
                <h1 className="question">
                    Test Question
                </h1>
                <div className="buttons-container">
                    <Button buttonClass="yes" text="Yep!" />
                    <Button buttonClass="no" text="S#&@" />
                </div>
            </div>
        );
    }
}

export default Question;
