import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        guesses: [],
        numToGuess: Math.floor(Math.random() * 101),
        feedback: 'Make Your Guess!'
      };
    }

    restartGame(){
      this.setState({
        guesses: [],
        numToGuess: Math.floor(Math.random() * 101),
        feedback: 'Make Your Guess!'
      });
    }

    makeGuess(guess) {
    const difference = Math.abs(guess - this.state.numToGuess);
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
    }
    let theFeedback;
    if (difference >= 50) {
      theFeedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      theFeedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      theFeedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      theFeedback = 'You\'re Hot!';
    } else {
      theFeedback = 'You got it!';
    }
      this.setState({
        feedback: theFeedback,
        guesses: [...this.state.guesses, guess]
      });
    }

    render(){
    return (
        <div>
            <Header onRestartGame={() => this.restartGame()}/>
            <GuessSection feedback="Make your guess!"
              onMakeGuess={guess=>this.makeGuess(guess)}
              guessCount={this.state.guesses.length}
              feedback={this.state.feedback}
              />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
  }
}
