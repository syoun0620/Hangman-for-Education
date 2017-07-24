import React from 'react';
import { Route, Link } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './about.js';

const App = () =>
    <div style={{'margin-left': '30px' }}>
        <h2>Vocabulary-learning Hangman Game</h2>
        <h4> <Link to = {'/'}> Home </Link>
        <Link to = {'/about'}>  About </Link> </h4>
        <Route exact path="/" component = {GameContainer} />
        <Route exact path="/about" component ={About}/>
    </div>;

export default App;
