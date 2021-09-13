import QuizQuestion from './QuizQuestion.js';
import { render } from "enzyme";
import React, { Component } from "react"
let quizData = require("./quiz_data.json")

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = { quiz_position: 1 }
    }
    render() {
        return (
            <div>
                <div className='QuizQuestion'>
                    <QuizQuestion quiz_question={quizData.quiz_question[this.state.quiz_position - 1]} />
                </div>
            </div>
        )
    }
}

export default Quiz

