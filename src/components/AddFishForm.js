import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    //prevent the form from reloading the page
    event.preventDefault();
    console.log('gonna make some fish!');
    //make fish object from input values in form
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    //pass in fish object to addFish() and clear out input fields
    this.props.addFish(fish)
    this.fishForm.reset()
  }

  render() {
    return (
			<form ref={(input) => {this.fishForm = input}} className='fish-edit' onSubmit={(e) => this.createFish(e)}>
				<input ref={(input) => {this.name = input}} type="text" placeholder='Fish Name'/>
				<input ref={(input) => {this.price = input}} type="text" placeholder='Fish Price'/>
				<select ref={(input) => {this.status = input}} >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<textarea ref={(input) => {this.desc= input}} type="text" placeholder='Fish Desc'/>
				<input ref={(input) => {this.image= input}} type="text" placeholder='Fish Image'/>
				<button type='submit'>Add Item</button>
			</form>
    )
  }
}

export default AddFishForm;
