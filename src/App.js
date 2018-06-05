import React, { Component } from 'react';
import './App.css';
import CardPreview from './CardPreview';

class App extends Component {
  state = {
    "cardPreviewContent" : "",
    "inputValue" : ""
  }
  
  inputChange = ( event ) => {
    this.setState({ 
      cardPreviewContent: event.target.value, 
      inputValue: event.target.value, 
    });
  }

  saveCard = ( event ) => {
    event.preventDefault();
    localStorage.setItem( 'alexFlashcards', `${this.state.cardPreviewContent}` );
    this.setState({ 
      cardPreviewContent: "",
      inputValue: "", 
    });
  }

  render() {
    return (
      <form className="App" onSubmit={ this.saveCard }>
        <h1>Create A Card</h1>
        <input value={ this.state.inputValue } onChange={ this.inputChange }/>
        <CardPreview content={ this.state.cardPreviewContent }/>
        <input type="submit" value="Save Card" />
      </form>
    );
  }
}

export default App;


