import React, { Component } from "react";

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.props = {...nextProps};
    } 
  }
  render() {
    let buttonText = "Hide";
    let userDivs = "";
    if (this.state.visible && this.props.data) {
      buttonText = "Hide";
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            {d[this.props.field1]}
            {d[this.props.field2]}
            {d[this.props.field3]}
          </div>
        );
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}


export default CollapsableMapper;
