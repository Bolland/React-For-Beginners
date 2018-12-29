import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  /** call this function onClick on button or but into onclick function directly (depending on whether function is called once or more)
   * handleClick = () => {
      this.props.addToOrder(this.props.index);
  } **/

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={this.props.details.image} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add to Cart" : "Sold out"}
        </button>
      </li>
    );
  }
}

export default Fish;
