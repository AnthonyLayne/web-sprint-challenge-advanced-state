import React from "react";
import { connect } from "react-redux";
//import * as actionCreators from "../state/action-creators";
import { inputChange, postQuiz } from "../state/action-creators";

export function Form(props) {
  const { newQuestion, newTrueAnswer, newFalseAnswer } = props.form;
  const onChange = (e) => {
    props.inputChange(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.postQuiz({
      question_text: newQuestion,
      false_answer_text: newFalseAnswer,
      true_answer_text: newTrueAnswer,
    });
  };
  const disableBtnn = [newFalseAnswer, newQuestion, newTrueAnswer].some(
    (field) => field.trim().length === 0
  );

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
        name="newQuestion"
        value={newQuestion}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
        name="newTrueAnswer"
        value={newTrueAnswer}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
        name="newFalseAnswer"
        value={newFalseAnswer}
      />
      <button disabled={disableBtnn} id="submitNewQuizBtn">
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, { inputChange, postQuiz })(Form);

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
