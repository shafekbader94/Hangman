import React, { Component } from 'react';

class Solution extends Component {
    render() {
        let letters = ["_", "_", "_", "_"]

        return (<div>
       {letters.map(c => <span>{c} </span>)}
            <div>Hint: </div>
        </div>)
    }
}
export default Solution