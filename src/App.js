import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '', // Stocker l'URL de l'image
    };
  }

  // Gérer le changement dans la zone de texte
  handleInputChange = (event) => {
    this.setState({ imageUrl: event.target.value });
  }

  // Gérer le clic sur le bouton d'analyse d'image
  handleAnalyzeClick = () => {
    // Ajoutez ici la logique pour l'analyse d'image (dans les exercices suivants)
    console.log('Analyse d\'image déclenchée');
  }

  // Gérer le clic sur le bouton de génération d'image
  handleGenerateClick = () => {
    // Ajoutez ici la logique pour la génération d'image (dans les exercices suivants)
    console.log('Génération d\'image déclenchée');
  }

  render() {
    return (
      <div className="App">
        <h1>Application de Vision par Ordinateur</h1>
        <label htmlFor="imageUrl">URL de l'image :</label>
        <input
          type="text"
          id="imageUrl"
          value={this.state.imageUrl}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAnalyzeClick}>Analyser</button>
        <button onClick={this.handleGenerateClick}>Générer</button>
      </div>
    );
  }
}

export default App;
