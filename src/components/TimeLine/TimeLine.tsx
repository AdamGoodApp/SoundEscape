import React, { Component } from "react";
import TimeLineItem from "./TimeLineItem/TimeLineItem";
import { Sounds } from "../SoundGrid/Sounds";
import "./TimeLine.css";

interface State {
  timeLine: any;
}

interface Sound {
  color: string;
  url: string;
  id: string;
}

class TimeLine extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      timeLine: []
    };
  }

  addToTimeLine = (sound: Sound) => {
    const { timeLine } = this.state;
    this.setState({ timeLine: [...timeLine, sound] });
  };

  handlePlayClick = (index: number = 0) => {
    const { timeLine } = this.state;

    if (index >= timeLine.length) {
      return true;
    }

    const audio = new Audio();

    audio.src = `http://docs.google.com/uc?export=open&id=${
      timeLine[index].url
    }`;

    audio.play();

    audio.onended = () => {
      this.handlePlayClick(index + 1);
    };
  };

  render() {
    return (
      <div className="time-line-grid-container">
        <div className="play-button" onClick={() => this.handlePlayClick()}>
          Play Button
        </div>

        {Sounds.map((x: Sound, i: any) => (
          <TimeLineItem
            sound={x}
            key={i}
            id={i}
            addToTimeLine={this.addToTimeLine}
          />
        ))}
      </div>
    );
  }
}

export default TimeLine;
