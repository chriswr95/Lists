import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      item: this.props.item
    }
  }

  changeState(e){
    var newState = !this.state.clicked;
    this.setState({clicked: newState});
  }

  handleRemoveItem(e){
    console.log(this.state);
    this.props.removeItem(this.state);
  }

  render(){
    var item = this.props.item;
    var name = item.name;
    var clicked = this.state.clicked;
    if(!clicked){
      return (
        <span onClick={this.changeState.bind(this)}> {name} </span>
      )
    } else {
      return (
        <span>
        <span onClick={this.changeState.bind(this)}> {name} </span>
        <button type="button" onClick={this.handleRemoveItem.bind(this)}> Remove </button>
        </span>

      )
    }
  }
}


export default ListItem;
