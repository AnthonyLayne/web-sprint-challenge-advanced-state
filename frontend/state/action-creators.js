// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";

import { initialSelectedAnswerState } from "./reducer";

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

const getQuizAPI = "http://localhost:9000/api/quiz/next";
const postQuizAPI = "http://localhost:9000/api/quiz/new";
const postAnswerAPI = "http://localhost:9000/api/quiz/answer";

//no payload
export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

//no payload
export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

//payload: answer id
export function selectAnswer(answerId) {
  return { type: SET_SELECTED_ANSWER, payload: answerId };
}

//no payload
export function setMessage() {
  return { type: SET_INFO_MESSAGE };
}

//no payload
export function setQuiz() {
  return { type: SET_QUIZ_INTO_STATE };
}

//payload: key, val
export function inputChange() {
  return { type: INPUT_CHANGE };
}

//no payload
export function resetForm() {
  return { type: RESET_FORM };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get(getQuizAPI).then((res) => {
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data });
    });
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer(post) {
  return function (dispatch) {
    axios.post(postAnswerAPI, post).then((res) => {
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: null });
      dispatch({ type: SET_SELECTED_ANSWER, payload: initialSelectedAnswerState });
      dispatch({ type: SET_INFO_MESSAGE, payload: res.data.message });
    });
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz() {
  return function (dispatch) {
    axios.post(postQuizAPI).then(() => {
      dispatch();
    });
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

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
