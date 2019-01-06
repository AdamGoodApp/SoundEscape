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
}

class TimeLine extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      timeLine: []
    };
  }

  addToTimeLine = (sound: Sound) => {
    console.log(sound);
    // const { timeLine } = this.state;
    // let updateTimeLine = [...timeLine];

    // updateTimeLine.find((e: any) => {
    //   if (e.id === sound.id) {

    //   }

    // });

    // console.log(updateTimeLine);
    // this.setState({ timeLine: [...timeLine, sound] });
  };

  render() {
    console.log(this.state.timeLine);
    return (
      <div className="time-line-grid-container">
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
