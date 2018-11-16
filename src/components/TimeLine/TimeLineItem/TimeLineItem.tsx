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
}

class TimeLineItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sound: this.props.sound
    };
  }

  onDragOver = (event: any) => {
    event.preventDefault();
  };

  onDrop = (event: any) => {
    event.preventDefault();
    let sound = JSON.parse(event.dataTransfer.getData("sound"));
    console.log(sound);
  };

  render() {
    return (
      <div
        className="time-line-item"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      />
    );
  }
}

export default TimeLineItem;
