import React, { Component } from 'react';
import analyzeImage from './azure-image-analysis';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      analysisResults: null,
      isLoading: false,
    };
  }

  handleAnalyzeClick = async () => {
    this.setState({ isLoading: true });

    const { imageUrl } = this.state;
    const results = await analyzeImage(imageUrl);

    this.setState({
      analysisResults: results,
      isLoading: false,
    });
  }

  render() {
    const { imageUrl, analysisResults, isLoading } = this.state;

    return (
      <div>
        <h1>Analyse d'image avec Azure AI Vision</h1>
        <input
          type="text"
          placeholder="URL de l'image"
          value={imageUrl}
          onChange={(e) => this.setState({ imageUrl: e.target.value })}
        />
        <button onClick={this.handleAnalyzeClick}>Analyser</button>

        {isLoading && <p>En cours d'analyse...</p>}

        {analysisResults && (
          <div>
            <h2>Résultats de l'analyse :</h2>
            <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default App;
