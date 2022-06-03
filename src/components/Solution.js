import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
       // let letters = ["_", "_", "_", "_"]
        let wordsArr = this.props.solution.word.split("")
    
        return (
        <div>

            {wordsArr.map(letter =>  this.props.letterStatus[letter]===false?
           <span> < Letter letter={"_ "}/> </span>: <span><Letter letter={letter}/></span>)}

            <div>Hint: {this.props.solution.hint}</div>
           
        </div>
        )
    }
}
export default Solution


//{letters.map(c => <span>{c} </span>)

//change true for fasle *