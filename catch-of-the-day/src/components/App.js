import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
   //set initial state
   state = {
      fishes: {}, //save all fished. Could also be array, ...
      order: {} // save all orders
   };

   static propTypes = {
      match: PropTypes.object
   };

   // ####   LIFECYCLE METHODS   #####

   componentDidMount() {
      const { params } = this.props.match;
      //reinstate localStorage
      const localStorageRef = localStorage.getItem(params.storeId);

      //if saved local storage exists, set order state to object (parse creates object from JSON string)
      if (localStorageRef) {
         this.setState({ order: JSON.parse(localStorageRef) });
      }

      //different ref than the input refs from forms.
      this.ref = base.syncState(`${params.storeId}/fishes`, {
         context: this,
         state: "fishes"
      });
   }

   componentDidUpdate() {
      localStorage.setItem(
         this.props.match.params.storeId,
         JSON.stringify(this.state.order) // convert object to string to avoid "[object Object]"" output
      );
   }

   //Stop listening for changes to avoid memory overflow
   componentWillUnmount() {
      base.removeBinding(this.ref);
   }

   // ####   CUSTOM METHODS   #####

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

   updateFish = (key, updatedFish) => {
      // 1. take copy of current fish
      const fishes = { ...this.state.fishes };

      // 2. Update that state
      fishes[key] = updatedFish;

      // 3. Set that to state
      this.setState({ fishes });
   };

   deleteFish = key => {
      // 1. Take a copy of state
      const fishes = { ...this.state.fishes };

      // 2. update the state (set deleted fish to null)
      fishes[key] = null;

      // 3. update state
      this.setState({ fishes });
   };

   loadSampleFishes = () => {
      this.setState({ fishes: sampleFishes });
   };

   addToOrder = key => {
      // 1. take a copy of state
      const order = { ...this.state.order };

      // 2. Either add to order or update number of order
      // if ƒish exists, add 1, otherwise set to 1
      order[key] = order[key] + 1 || 1;

      // 3. set new order state
      this.setState({ order });
   };

   removeFromOrder = key => {
      // 1. make copy of state
      const order = { ...this.state.order };

      // 2. Delete fish from order
      delete order[key];

      // 3. set new order state
      this.setState({ order });
   };

   render() {
      return (
         <div className="catch-of-the-day">
            <div className="menu">
               <Header tagline="Fresh seafood market" />
               <ul className="fishes">
                  {Object.keys(this.state.fishes).map(key => (
                     <Fish
                        key={key}
                        index={key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                     />
                  ))}
               </ul>
            </div>
            <Order
               fishes={this.state.fishes}
               order={this.state.order}
               removeFromOrder={this.removeFromOrder}
            />{" "}
            {/** alternative: pass whole state object with spread: <Order {...this.state} />); better: pass down explicitly */}
            {/** passing method down to addFishForm */}
            <Inventory
               addFish={this.addFish}
               updateFish={this.updateFish}
               deleteFish={this.deleteFish}
               loadSampleFishes={this.loadSampleFishes}
               fishes={this.state.fishes}
               storeId={this.props.match.params.storeId}
            />
         </div>
      );
   }
}

export default App;
