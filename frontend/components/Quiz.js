import React, { useEffect } from "react";
import { connect } from "react-redux";

import { selectAnswer, fetchQuiz, postAnswer } from "../state/action-creators";

function Quiz(props) {
  //check if quiz exists, if it doesn't get the quiz
  //will need to post the answer when submitting
  //need to map out the two answers, they are currently hard coded in.
  //button on the answer changes from 'selected' to "SELECTED" when clicked, only changes if the other answer is selected

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

//mStP-> need the quiz, and the selected answer
//connect
const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    answerSelect: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, {})(Quiz);

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
