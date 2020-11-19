import React from "react";

class TwitterMessage extends React.Component {
  state = {
    currentChars: this.props.maxChars,
    input: "0"
  }
  // trackChars = (event) => {
  //   this.setState({
  //     currentChars: this.state.currentChars - this.state.input.length,
  //     input: event.target.value
  //   })
  //   console.log(this.state)
    
  // }
  updateData = (event) => {
    console.log(event.target.value)
    this.setState({
      currentChars: this.props.maxChars - this.state.input.length,
      input: event.target.value
    })
    console.log(this.state)
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange= {this.updateData}type="text" name="message" id="message" maxLength={this.props.maxChars} />
        <h3>Remaining Characters: {this.state.currentChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
