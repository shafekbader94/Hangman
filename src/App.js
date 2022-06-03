import React, { Component } from 'react';
import './App.css';
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

  render(){
  return (
    <div>
    <Score score={this.state.score}/>
    <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
    <Letters letterStatus={this.state.letterStatus}/>
    <Letter/>
     </div>
  )
  }
}

export default App;
