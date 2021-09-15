import QuizQuestion from './QuizQuestion.js';
import { render } from "enzyme";
import React, { Component } from "react";
import QuizEnd from './QuizEnd.js';

let quizData = require("./quiz_data.json")

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = { quiz_position: 1 }
    }

    showNextQuestion(){
        this.setState( (state) => ({
                quiz_position: this.state.quiz_position + 1
            }));
    }

    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length);
        if (isQuizEnd){
            return (
                <div>
                    <QuizEnd />
                </div>
            );
        } else {
            return (
                <div>
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
                </div>
            );
        }
    }
}

export default Quiz

