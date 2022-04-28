import React, { useEffect } from "react";
import { connect } from "react-redux";

import { selectAnswer, postAnswer, fetchQuiz } from "../state/action-creators";

function Quiz(props) {
  //check if quiz exists, if it doesn't get the quiz
  //will need to post the answer when submitting
  //need to map out the two answers, they are currently hard coded in.
  //button on the answer changes from 'selected' to "SELECTED" when clicked, only changes if the other answer is selected

  useEffect(() => {
    if (!props.quiz) {
      return props.fetchQuiz();
    }
  }, [props.quiz]);

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              {props.quiz.answers.map((answer, id) => {
                const select = props.answerSelect === id;
                return (
                  <div className={select ? "answer selected" : "answer"} key={answer.answer_id}>
                    {answer.text}
                    <button
                      onClick={() => {
                        props.selectAnswer(id);
                      }}
                    >
                      {select ? "SELECTED" : "Select"}
                    </button>
                  </div>
                );
              })}
            </div>
            {/**need answer id and quiz id */}
            <button
              id="submitAnswerBtn"
              onClick={() =>
                props.postAnswer({
                  answer_id: props.quiz.answers[props.answerSelect].answer_id,
                  quiz_id: props.quiz.quiz_id,
                })
              }
            >
              Submit answer
            </button>
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

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz);

//classname will have to be answer selected if selected or answer otherwise

/** <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button>Select</button>
              </div> */

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
