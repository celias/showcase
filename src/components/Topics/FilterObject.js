import React, { Component } from 'react';

export default class FilterObject extends Component {

constructor() {
    super();

        this.state = {
            pets: [
            {
             name: 'Jelly Bean',
             type: 'Guinea Pig',
             color: 'Ginger'
            },
            {
             name: 'Marmalade',
             type: 'Feline',
             age: 7
            },
            {
             name: 'Missy Elliott',
             type: 'Gold Fish',
            }
        ],
                
            userInput: '',
            filterPets: []
            
        }
    }


    handleChange(val) {
        this.setState( { userInput: val });
    }

    filterPets(prop) {
        var pets = this.state.pets;
        var filterPets = [];

        for ( var i = 0; i < pets.length; i++){
            if (pets[i].hasOwnProperty(prop) ){
                filterPets.push(pets[i]);
            }
        }

        this.setState({ filterPets: filterPets });
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.pets, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => this.filterPets(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered { JSON.stringify(this.state.filterPets, null, 10) }</span>
                
            </div>
        )
    }
}