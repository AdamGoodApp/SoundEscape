import React, { Component } from "react";
import TimeLineItem from "./TimeLineItem/TimeLineItem";
import Pizzicato from "pizzicato";
import { Sounds } from "../SoundGrid/Sounds";

import "./TimeLine.css";

class TimeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLine: []
    };
  }

  addToTimeLine = sound => {
    const { timeLine } = this.state;
    this.setState({ timeLine: [...timeLine, sound] });
  };

  handlePlayClick = (index = 0) => {
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

  handleDownloadClick = () => {
    let { timeLine } = this.state;
    let sounds = timeLine.map(e => {
      `http://docs.google.com/uc?export=open&id=${e.url}`;
    });

    alert(sounds[0]);
  };

  render() {
    let group = new Pizzicato.Group([]);

    // group.addSound(bass);
    // group.addEffect(reverb);
    // group.play();

    return (
      <div className="time-line-grid-container">
        <div onClick={this.handleDownloadClick}>DOWNLOAD</div>
        <div className="play-button" onClick={() => this.handlePlayClick()}>
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIzMi4xNTMgMjMyLjE1MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjMyLjE1MyAyMzIuMTUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgaWQ9IlBsYXkiPgoJPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkOyIgZD0iTTIwMy43OTEsOTkuNjI4TDQ5LjMwNywyLjI5NGMtNC41NjctMi43MTktMTAuMjM4LTIuMjY2LTE0LjUyMS0yLjI2NiAgIGMtMTcuMTMyLDAtMTcuMDU2LDEzLjIyNy0xNy4wNTYsMTYuNTc4djE5OC45NGMwLDIuODMzLTAuMDc1LDE2LjU3OSwxNy4wNTYsMTYuNTc5YzQuMjgzLDAsOS45NTUsMC40NTEsMTQuNTIxLTIuMjY3ICAgbDE1NC40ODMtOTcuMzMzYzEyLjY4LTcuNTQ1LDEwLjQ4OS0xNi40NDksMTAuNDg5LTE2LjQ0OVMyMTYuNDcxLDEwNy4xNzIsMjAzLjc5MSw5OS42Mjh6IiBmaWxsPSIjOTMzRUM1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>

        {Sounds.map((x, i) => (
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
