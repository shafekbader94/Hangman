import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
        <span>
            <span >{this.props.letter} </span>
   
     <span class={this.props.class}>
                {this.props.availableLetters}</span>
            </span>
            )

    }
}
export default Letter