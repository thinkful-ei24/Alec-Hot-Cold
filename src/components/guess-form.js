import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  onSubmit(e){
    e.preventDefault();
    if(this.props.onMakeGuess){
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }
  render(){
    return (
         <form onSubmit={e => this.onSubmit(e)}>
            <input type="text"
                name="userGuess"
                id="userGuess"
                className="text"
                maxLength="3"
                autoComplete="off"
                placeholder="Enter your Guess" required
                ref={input => (this.input = input)}
                required
                />
              <button type="submit"
                id="guessButton" className="button"
                name="submit"
                value="Guess">
                Guess
              </button>
        </form>
    );
  }
};
