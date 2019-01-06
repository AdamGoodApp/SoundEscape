import React, { Component } from "react";
import "./TimeLineItem.css";

interface Sound {
  color: string;
  url: string;
}

interface Props {
  sound: Sound;
  addToTimeLine: any;
  id: any;
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

      sound.id = event.target.id;

      this.props.addToTimeLine(sound);
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
        id={this.props.id}
      />
    );
  }
}

export default TimeLineItem;
