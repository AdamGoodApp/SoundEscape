import React, { Component } from "react";
import SoundItem from "./SoundItem/SoundItem";
import { Sounds } from "./Sounds";
import "./SoundGrid.css";

interface Sound {
  color: string;
}

class SoundGrid extends Component {
  render() {
    return (
      <div className="sound-grid-container">
        {Sounds.map((x: Sound) => (
          <SoundItem sound={x} />
        ))}
      </div>
    );
  }
}

export default SoundGrid;
