import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { serveBadGuess, serveGoodGuess, serveNewGame } from '../actions/index';


const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onNewGame }) => {
    let input;

    const letterInAnswer = letter => wordLetters.letters.some(
       letterObj => letterObj.letter === letter);
    return (
        <div>
            <form>
              <div>
                <div style={{'font-size': '20px', 'font-weight': 'bold'}}> Click Language to Start!</div>
                <button style={{'backgroundColor': '#f7f8f9', 'padding': '5px 10px'}} type="reset" onClick={() => {
                    onNewGame('english');
                }}> English </button>
                <button style={{'backgroundColor': '#f7f8f9', 'padding': '5px 10px'}} type="reset" onClick={() => {
                    onNewGame('spanish');
                }}> Spanish </button>
                <button style={{'backgroundColor': '#f7f8f9', 'padding': '5px 10px'}} type="reset" onClick={() => {
                    onNewGame('korean');
                }}> Korean </button>
                <button style={{'backgroundColor': '#f7f8f9', 'padding': '5px 10px'}} type="reset" onClick={() => {
                    onNewGame('mandarin');
                }}> Mandarin </button> <br/>
              </div>
              Hint: {!wordLetters.word ? '' : 'Starts with ' + wordLetters.word[0] + ', Ends with ' + wordLetters.word[wordLetters.word.length - 1] }<br/>
            </form>
            {wordLetters.word ?
            <div>
              <h3>
                Definition: {wordLetters.word ? wordLetters.definition : ''}
            </h3>
              <Man badGuesses={badGuesses} />
              <span>
                  Guessed Letters: {guessedLetters}
              </span>
              <Board  />
              <input type="text"
                  style = {{'margin-top': '10px'}}
                  value={''}
                  ref={node => {input = node;}}
                  onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
              />
              <br/>
            </div> : false}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.object,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onNewGame: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch(serveBadGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(serveGoodGuess(inputLetter));
        },
        onNewGame: (inputWord) => {
            dispatch(serveNewGame(inputWord));
        }
    };
};
// const styles = Styles.Sheet.create({
//     button: {
//         // backgroundColor: #4CAF50,
//         border: none,
//         color: white,
//         text-align: center,
//         text-decoration: none,
//         display: inline-block,
//         font-size: 16px
//     }
// })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
