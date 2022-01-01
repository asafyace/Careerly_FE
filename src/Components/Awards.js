import React, { Component } from "react";

class Awards extends Component {
  render() {
    if (this.props.data) {
      var awards = this.props.data.awards.map(function (awards) {
        return (
          <li key={awards.user}>
            <blockquote>
              <p>{awards.text}</p>
              <cite>{awards.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return <section id="awards"></section>;
  }
}

export default Awards;
