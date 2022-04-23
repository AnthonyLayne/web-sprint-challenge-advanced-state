import React from "react";
import { connect } from "react-redux";

function Message(props) {
  return <div id="message">{props.headerMessage}</div>;
}

const mapStateToProps = (state) => {
  return {
    headerMessage: state.infoMessage,
  };
};

export default connect(mapStateToProps)(Message);
/**{
  wheel: 5,
  quiz: {
    quiz_id: 'UnC4X',
    question: 'asf',
    answers: [
      {
        answer_id: 'h1WHs',
        text: 'asdf'
      },
      {
        answer_id: 'OYmJ0',
        text: 'asdf'
      }
    ]
  },
  selectedAnswer: 'OYmJ0',
  infoMessage: '',
  form: {
    newQuestion: '{[e.target.name]: e.target.value}',
    newTrueAnswer: '',
    newFalseAnswer: ''
  }
} */
