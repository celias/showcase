import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();

    this.state ={
        userInput: '',
        palindrome: ''
    }

  }

  handleChange(val){
    this.setState( {userInput: val} );
  }

  checkForPalindrome(userInput){
    let removeChar = userInput.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let checkPal = removeChar.split('').reverse().join('');

    if(removeChar===checkPal){
        this.setState( { palindrome: 'true' } );
    } else {
        this.setState( { palindrome: 'false' } )
    }

}
    


    render(){
        return(
          <div className="puzzleBox filterStringPB">
          <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.checkForPalindrome(this.state.userInput) }>Check Here</button>
            <span className="resultsBox">Results: { this.state.palindrome }</span>
        </div>
        )
    }
}
export default Palindrome;