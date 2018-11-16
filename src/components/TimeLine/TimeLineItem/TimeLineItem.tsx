import React, { Component } from "react";
import "./TimeLineItem.css";

interface Sound {
  color: string;
}

interface Props {
  sound: Sound;
}

interface State {
  sound: Sound;
  color: string;
}

class TimeLineItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sound: this.props.sound,
      color: ""
    };
  }

  onDragOver = (event: any) => {
    event.preventDefault();
  };

  onDrop = (event: any) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("sound");

    if (data) {
      let sound = JSON.parse(event.dataTransfer.getData("sound"));
      this.setState({ color: sound.color });
    }
  };

  render() {
    let { color } = this.state;
    return (
      <div
        className="time-line-item"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        style={{ backgroundColor: color }}
      />
    );
  }
}

export default TimeLineItem;
