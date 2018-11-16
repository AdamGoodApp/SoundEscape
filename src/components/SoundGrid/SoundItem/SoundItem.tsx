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

  onDragStart = (event: any, sound: any) => {
    event.dataTransfer.setData("sound", JSON.stringify(sound));
  };

  render() {
    let { sound } = this.state;
    let { color } = sound;

    return (
      <div
        className="sound-item"
        onDragStart={(e: any) => this.onDragStart(e, sound)}
        draggable={true}
        style={{ backgroundColor: color }}
      />
    );
  }
}

export default SoundItem;
