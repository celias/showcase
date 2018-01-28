import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            foods: ["sushi", "wasabi", "salmon", "nori", "pizza", "leftovers", "ham", "cheese", "spaghetti o's", "miso"],
            userInput: '',
            filteredFoods: []
            
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterFoods(userInput) {
        let foods = this.state.foods;
        let filteredFoods = [];
        // is going to return a new array populated with the strings that do contain a given singular "string".
        // update the value of the filteredArray
        
        for ( var i = 0; i < foods.length; i++ ) {
            if ( foods[i].includes(userInput) ) {
              filteredFoods.push(foods[i]);
            } 
      
    }
        
        this.setState({ filteredFoods: filteredFoods })
        
        
    }
    
    render() {
        return(
            
            <div className="puzzleBox filterStringPB">
              <h4>Filter String</h4>
              <span className="puzzleText"> Foods: { JSON.stringify(this.state.foods) }</span>
              <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
              <button className="confirmationButton" onClick={ () => this.filterFoods(this.state.userInput, 10) }>Filter</button>
              <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredFoods, 10) }</span>
             
            </div>
        )
    }
}
export default FilterString;
