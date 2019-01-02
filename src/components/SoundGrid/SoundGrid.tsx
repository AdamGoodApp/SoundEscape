import React, { Component } from "react";
import SoundItem from "./SoundItem/SoundItem";
import { Sounds } from "./Sounds";
import "./SoundGrid.css";

interface Sound {
  color: string;
  url: string;
}

class SoundGrid extends Component {
  render() {
    return (
      <div className="sound-grid-container">
        {Sounds.map((x: Sound, i: number) => (
          <SoundItem sound={x} key={i} />
        ))}
      </div>
    );
  }
}

export default SoundGrid;
