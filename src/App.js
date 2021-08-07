import React, { Component } from "react";
import "./App.css";
import Circles from "./compenents/Circles/Circles";
import CircleSelector from "./compenents/CircleSelector/CircleSelector";

class App extends Component {
  state = {
    buttons: [
      {
        idx: 1,
        selected: true,
      },
      {
        idx: 2,
        selected: false,
      },
      {
        idx: 3,
        selected: false,
      },
      {
        idx: 4,
        selected: false,
      },
    ],
  };

  handleClick = async (btn) => {
    console.log(btn);
    const newbtn = { idx: btn.idx, selected: true };
    // const falseButtons = [
    //   {
    //     idx: 1,
    //     selected: false,
    //   },
    //   {
    //     idx: 2,
    //     selected: false,
    //   },
    //   {
    //     idx: 3,
    //     selected: false,
    //   },
    //   {
    //     idx: 4,
    //     selected: false,
    //   },
    // ];
    const falseButtons = this.state.buttons.map((rb) => ({
      idx: rb.idx,
      selected: false,
    }));
    const newButtons = falseButtons.map((b) =>
      b.idx === btn.idx ? newbtn : b
    );
    this.setState({ buttons: newButtons });
  };

  // state = {
  //   buttonOneSelected: true,
  //   buttonTwoSelected: false,
  //   buttonThreeSelected: false,
  //   buttonFourSelected: false,
  // };
  render() {
    const buttons = this.state.buttons;
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector buttons={buttons} handleClick={this.handleClick} />
          <Circles buttons={buttons} />
        </main>
      </div>
    );
  }
}

export default App;
