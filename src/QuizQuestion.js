import React, { Component } from 'react'
class QuizQuestion extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.quiz_question.anwser_options[0]}</li>
                    </ul>
                </section>
            </main>
        );
    }
}
export default QuizQuestion