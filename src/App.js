import React, { Component } from 'react';
import './App.css';
import  Letter  from './components/Letter'
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';



class App extends Component{
  render(){
  return (
    <div>
    <Score/>
    <Solution/>
    <Letters/>
    <Letter/>
     </div>
  )
  }
}

export default App;
