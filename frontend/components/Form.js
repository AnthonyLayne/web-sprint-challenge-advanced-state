import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const onChange = (evt) => {};

  const onSubmit = (evt) => {};

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);

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
