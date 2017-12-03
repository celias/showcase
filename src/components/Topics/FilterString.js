//always at the top
import React, { Component } from 'react';
//exports your default class 'Filter String'
export default class FilterString extends Component {
  
  constructor() {
    super();

    this.state = {
      philosophers: [
        "Sartre",
        "Ponty",
        "Nietzsche",
        "Wittgenstein",
        "Whitehead",
        "Derrida",
        "Hegel",
        "Beauvoir",
        "Nancy",
        "Walter Benjamin",
        "Sam",
        "Dan",
        "Maurice",
        "Betsy",
        "Henry"
      ],
      userInput: "",
      filterPhilosophers: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterPhilosophers(userInput) {
    var philosophers = this.state.philosophers;
    var filterPhilosophers = [];

    for (var i = 0; i < philosophers.length; i++) {
      if (philosophers[i].includes(userInput))
        filterPhilosophers.push(philosophers[i]);
    }

    //the return of filtering philosophers
    this.setState({ filterPhilosophers: filterPhilosophers });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Philosophers: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterPhilosophers(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Philosophers: {JSON.stringify(this.state.filterPhilosophers, null, 10)}
        </span>
      </div>
    )
  }
}
