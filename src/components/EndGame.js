import React, { Component } from 'react';
import '../App.css';

class EndGame extends Component {
    endGame = () => {
        this.props.endGame("End")
    
      }
    render() {
        let wordsArr = this.props.solution.split("")
        let wordsArrLen = wordsArr.length
     let cong = "Congratulations"
     let lost = "Lost, the answer is: " + this.props.solution

        let checkarray =[]

        wordsArr.map((letter) =>  this.props.letterStatus[letter]===true?
            checkarray.push(letter) : "")

            console.log(checkarray)
        return (
        <div >
            <span>{this.props.score <= 0 ? 
             <span > <div className='lost'>{lost}</div><button onClick={this.endGame}>Reset Game</button> </span>  
             : wordsArrLen === checkarray.length ? <span > <div className='cong'>{cong}</div><button onClick={this.endGame}>Reset Game</button> </span>
             : "" }</span>
            <span>{}</span>
        </div>)
    }
}
export default EndGame