import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor () {
        super();

        this.state = {
            philosophers: ['Sartre', 'Ponty', 'Nietzsche', 'Wittgenstein', 'Whitehead', 'Derrida', 'Hegel', 'Beauvoir'],
            userInput: '',
            filterPhilosophers: []

        }
    }





    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter Philosophers </button>
                <span className="resultsBox filterStringRB"></span>
                </div>


        )
    }
}