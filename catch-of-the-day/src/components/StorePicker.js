// Component schema: Import, class definition, export.

import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
   //alternativ to constructor: use goToStore = event => {...}
   // constructor() {
   //     super();
   //     console.log('Create component');
   //     this.goToStore = this.goToStore.bind(this);
   // }

   static propTypes = {
      history: PropTypes.object
   };

   myInput = React.createRef();

   // call this with "onSubmit={this.goToStore}"
   // syntax to be able to use "this" in side of
   goToStore = event => {
      // goToStore(event) {
      // 1 Stof form from submittin
      event.preventDefault();
      // 2 get text from input
      // React golden rule: Don't tought he DOM!
      const storeName = this.myInput.value.value;

      // 3 change the page to store/input
      // pushing the new page will trigger the Router to render a new page.
      this.props.history.push(`/store/${storeName}`);
   };

   // every class needs render() menthod
   render() {
      //return <p>Hello, this is StorePicker component!</p>
      //return '<p>${variable}</p>';
      return (
         //empty wrapper
         <React.Fragment>
            {/* Javascript goes in here */}
            <form
               action=""
               className="store-selector"
               onSubmit={this.goToStore}>
               <h2>Please enter your Store</h2>
               <input
                  type="text"
                  ref={this.myInput}
                  required
                  placeholder="Store Name"
                  defaultValue={getFunName()}
               />
               <button type="submit">Visit Store</button>
            </form>
         </React.Fragment>
      );
   }
}

export default StorePicker;
// Export Component = make it available
