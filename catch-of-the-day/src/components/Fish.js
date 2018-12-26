import React from "react";

class Fish extends React.Component {
    render() {
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.image} />
{            /** continue: 9.38 min : https://courses.wesbos.com/account/access/5bfb1754256ae9346111e932/view/257754566 */}
            </li>
        )
    }
}

export default Fish;