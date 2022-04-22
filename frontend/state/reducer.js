// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

//use state and not index
//cog position state is 0-5, clockwise is state + 1, counter is state - 1,
//clockwise - if state = 5 return to 0 position, counter - if state = 0 return to 5 position
const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE: {
      if (state === 5) {
        return 0;
      } else return state + 1;
    }
    case MOVE_COUNTERCLOCKWISE: {
      if (state === 0) {
        return 5;
      } else return state - 1;
    }
    default: {
      return state;
    }
  }
}
//returns action.payload
const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE: {
      return {};
    }
    default: {
      return state;
    }
  }
}

//returns action.payload

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER: {
      return {};
    }
    default: {
      return state;
    }
  }
}

//returns action.payload

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE: {
      return {};
    }
    default: {
      return state;
    }
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
//returns initialFormState, and spread state, spread action.payload
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {};
    }
    case RESET_FORM: {
      return {};
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });

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
