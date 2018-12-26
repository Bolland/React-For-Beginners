import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  //set initial state
  state = {
    fishes: {}, //save all fished. Could also be array, ...
    order: {} // save all orders
  };

  addFish = fish => {
    //use React setState method to update state

    // 1. Take a copy of the existing satate (with an object spread)
    const fishes = { ...this.state.fishes };

    // 2. Add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. set new fishes object to state
    this.setState({
      //fishes: fishes
      //if properta an value is the same you can just pass "fishes:"
      fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        {/** passing method down to addFishForm */}
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
