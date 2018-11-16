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

  render() {
    return <div className="time-line-item" />;
  }
}

export default TimeLineItem;
