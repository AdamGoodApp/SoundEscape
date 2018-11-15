import React, { Component } from "react";
import TimeLineItem from "./TimeLineItem/TimeLineItem";
import { Sounds } from "../SoundGrid/Sounds";
import "./TimeLine.css";

interface Sound {
  color: string;
}

class TimeLine extends Component {
  render() {
    return (
      <div className="time-line-grid-container">
        {Sounds.map((x: Sound) => (
          <TimeLineItem sound={x} />
        ))}
      </div>
    );
  }
}

export default TimeLine;
