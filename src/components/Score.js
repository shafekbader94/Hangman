import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
        <div>
            <em>Score:{this.props.score} </em>
        </div>)
    }
}
export default Score