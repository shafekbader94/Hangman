import React, { Component } from 'react';
import '../App.css';

class Score extends Component {
myScoreColor = () =>{
    let scoreColor
    if(this.props.score >= 80)
        scoreColor = "high-score"
    else if(this.props.score >= 50 && this.props.score < 80)
        scoreColor = "medium-score"
    else   
        scoreColor = "low-score"
    
    return scoreColor

}
    render() {
        return (
        <div className="score">
            <em className={this.myScoreColor()}>Score:{this.props.score} </em>
        </div>)
    }
}
export default Score