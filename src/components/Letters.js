import React, { Component } from 'react';
import Letter from './Letter';
import '../App.css';

class Letters extends Component {
    render() {
        const letterStatus = Object.keys(this.props.letterStatus)
        const letterStatusValue = Object.values(this.props.letterStatus)
    
        return (
        <div>
            <div>Available letters: </div>
            <span>{letterStatus.map((letter,i) => 
            <Letter availableLetters={letter} 
             class={letterStatusValue[i] === false ?
             "non-selcted" : "selected"}/>)}
             </span>
        </div>)
    }
}
export default Letters