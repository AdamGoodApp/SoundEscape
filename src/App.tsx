import * as React from "react";
import SoundGrid from "./components/SoundGrid/SoundGrid";
import "./App.css";

class App extends React.Component {
  public componentDidMount() {
    document.title = "Your chromesthesia sound experience";
  }

  public render() {
    return (
      <div className="App">
        <SoundGrid />
      </div>
    );
  }
}

export default App;
