import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import badGuessesReducer from './badGuessesReducer';
import wordLettersReducer from './wordLettersReducer';
import guessedLetterReducer from './guessedLetterReducer';
// import gameSettingsReducer from './gameSettingsReducer';

/*
  combineReducers lets you meld several reducers into one.
  So calling combineReducers after having uncommented the below
  should give you a reducer for a combined state that looks like:
    {
      badGuesses: STATE FROM BAD GUESSES REDUCER,
      wordLetters: STATE FROM WORD LETTERS REDUCER,
      routing: STATE FROM ROUTER REDUCER (you don't care about this)
    }
*/
const rootReducer = combineReducers({
    badGuesses: badGuessesReducer,
    wordLetters: wordLettersReducer,
    guessedLetters: guessedLetterReducer,
    // gameSettings: gameSettingsReducer,
    routing: routerReducer // this reducer is used by React Router in Redux
});

export default rootReducer;
