import React, { Component } from 'react';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
      addingItem: false,
      newItem: {}
    }
  }

  changeState(e){
    var newState = !this.state.addingItem;
    this.setState({addingItem: newState});
  }

  update(e){
      this.setState({newItem: {name: e.target.value}});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.addItem(this.state);
  }

  render(){
    if(this.state.addingItem){
      return (
        <form ref='form' onChange={this.update.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='id' />
          <input type='submit' value='Submit' />
          <br />
        </form>
      )
    } else {
      return (
        <button type="button" onClick={this.changeState.bind(this)}> Add Item </button>
      )
    }
  }
}


export default AddItem;
