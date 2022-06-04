import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
        let wordsArr = this.props.solution.word.split("")
    
        return (
        <div>

            {wordsArr.map((letter, i) =>  this.props.letterStatus[letter]===false?
           <span> < Letter key={i} letter={"_ "}/> </span>: <span><Letter key={letter} letter={letter}/></span>)}

            <div>Hint: {this.props.solution.hint}</div>
           
        </div>
        )
    }
}
export default Solution
