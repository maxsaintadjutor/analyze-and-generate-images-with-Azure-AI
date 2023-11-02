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

