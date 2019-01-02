import React, { Component } from "react";
import "./SoundItem.css";

interface Sound {
  color: string;
  url: string;
}

interface Props {
  sound: Sound;
}

interface State {
  sound: Sound;
}

let prevAudio: any;

class SoundItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sound: this.props.sound
    };
  }

  handleClick = (url: string) => {
    if (prevAudio) {
      prevAudio.pause();
      prevAudio.currentTime = 0;
    }

    const audio = new Audio(`http://docs.google.com/uc?export=open&id=${url}`);

    prevAudio = audio;

    audio.play();
  };

  onDragStart = (event: any, sound: any) => {
    event.dataTransfer.setData("sound", JSON.stringify(sound));
  };

  render() {
    let { sound } = this.state;
    let { color, url } = sound;

    return (
      <div
        className="sound-item"
        onDragStart={(e: any) => this.onDragStart(e, sound)}
        draggable={true}
        style={{ backgroundColor: color }}
        onClick={() => this.handleClick(url)}
      />
    );
  }
}

export default SoundItem;
