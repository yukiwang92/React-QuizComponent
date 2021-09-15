import React, {Component} from 'react';

class QuizQuestionButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){       
        this.props.clickHandler(button_text)
    }


    render(){
        return (
            <li>
                <button onClick={this.handleClick} >{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton;