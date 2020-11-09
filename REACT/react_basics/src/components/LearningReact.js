import React, { Component } from "react";

export class LearningReact extends Component {
  render() {
    return (
      <div className="learning-react">
        <h1>React tuorial currently followed by: {this.props.name}</h1>
        <ul>
          <li>Look right here! I added a Component</li>
          <li>Lifting state, pass down props</li>
          <li>Copy & Paste</li>
        </ul>
      </div>
    );
  }
}

export default LearningReact;
