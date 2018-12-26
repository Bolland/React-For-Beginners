import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    statusRef = React.createRef();
    imageRef = React.createRef();
    formRef = React.createRef();

    createFish = event => {
        // 1. prefent default action
        event.preventDefault();

        // 2. save data to state
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            desc: this.descRef.value.value,
            status: this.statusRef.value.value,
            image: this.imageRef.value.value
        }

        console.log(fish);
        this.props.addFish(fish);

        // refresh the form. 
        //event.currentTarget.reset();

        //Alternative: set ref on Form an reset it that way.
        this.formRef.value.reset();
    };

    render() {
        return (
            <form className="fish-edit" ref={this.formRef} onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input
                    name="price"
                    ref={this.priceRef}
                    type="text"
                    placeholder="Price"
                />
                <select name="status" ref={this.statusRef}>
                    <option value="avaiable">Fresh!</option>
                    <option value="unavaiable">Sold out!</option>
                </select>
                <textarea
                    name="desc"
                    type="text"
                    placeholder="Desc"
                    ref={this.descRef}
                />
                <input
                    name="image"
                    ref={this.imageRef}
                    type="text"
                    placeholder="Image"
                />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}
export default AddFishForm;