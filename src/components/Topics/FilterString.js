import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            foods: ["sushi", "wasabi", "salmon", "nori", "pizza", "leftovers", "ham", "cheese", "spaghetti o's", "miso"],
            userInput: '',
            filteredFoods: [],
            noFoodz: "Sorry Bryce, we're out of that food."
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterFoods(userInput) {
        let foods = this.state.foods;
        let filteredFoods = [];
        let noFoodz = this.state.noFoodz;
        // is going to return a new array populated with the strings that do contain a given singular "string".
        // update the value of the filteredArray
        
        filteredFoods.map((curr, i, arr) => {this.state.foods});
        // console.log(this.state.foods);
        if(foods.includes(userInput) ) {
            filteredFoods.push(foods);
        } else {
            if(foods.includes(userInput) !== this.state.foods) {
            filteredFoods.push(noFoodz);
        } 
    }
        
        this.setState({ filteredFoods: filteredFoods })
        
        
    }
    
    render(){
        return(
            
            <div className="puzzleBox filterStringPB">
              <h4>Filter String</h4>
              <span className="puzzleText"> Foods: { JSON.stringify(this.state.foods) }</span>
              <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
              <button className="confirmationButton" onClick={ () => this.filterFoods(this.state.userInput, 10) }>Filter</button>
              <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredFoods, 10) }</span>
              <span> { JSON.stringify() }</span>
            </div>
        )
    }
}
export default FilterString;
