import React, { Component } from 'react';
import './App.css';
import EndGame from './components/EndGame';
import  Letter  from './components/Letter'
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';



class App extends Component{
  constructor(){
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word:"STRING",
        hint:"hint"
      },
      score:100
    }
  }

  generateLetterStatuses(){
    let letterStatus = {}
    for(let i = 65 ; i < 91 ; i++)
      letterStatus[String.fromCharCode(i)] = false
    return letterStatus
  }

  selectLetter = letter =>{
 
    let currentLetterStatus = {...this.state.letterStatus}
    currentLetterStatus[letter] = true
  this.scoreUpdating(letter)
    this.setState({
      letterStatus: currentLetterStatus
    })
  }

  scoreUpdating = (letter) => {
    let scoreToUpdate
   if(this.state.solution.word.includes(letter)){
     scoreToUpdate = 5
     
   }
   else{
     scoreToUpdate = -20


   }

    this.setState({
      score: this.state.score + scoreToUpdate
    }) 
  }

  endGame = (words) => {
    let reset = this.generateLetterStatuses()
    if(words === "End"){
      this.setState({
        letterStatus: reset,
        score:100
      })
    }

  }

  render(){
  return (
    <div>
    <Score score={this.state.score}/>
    <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
    <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
    <Letter />
    <EndGame letterStatus={this.state.letterStatus} solution={this.state.solution.word} score={this.state.score} endGame={this.endGame}/>
     </div>
  )
  }
}

export default App;
