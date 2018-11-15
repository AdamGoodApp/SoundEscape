import React, { Component } from "react";
import "./SoundItem.css";

interface Sound {
  color: string;
}

interface Props {
  sound: Sound;
}

interface State {
  sound: Sound;
}

class SoundItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sound: this.props.sound
    };
  }

  render() {
    let { color } = this.state.sound;

    return <div className="sound-item" style={{ backgroundColor: color }} />;
  }
}

export default SoundItem;
