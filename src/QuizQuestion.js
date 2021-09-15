import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';
class QuizQuestion extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick(buttonText){
        this.props.showNextQuestionHandler = () => {(buttonText === this.props.quiz_question.answer)}    
    }

    render(){
        const answer_option = this.props.quiz_question.answer_options.map(index => <ul>{index}</ul>)
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
                    </ul>
                </section>
            </main>
        );
    }
}
export default QuizQuestion