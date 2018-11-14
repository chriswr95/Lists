import React, { Component } from 'react';

class ListItem extends Component {


  render(){
    var item = this.props.item;
    var name = item.name;

    return (
      <span> {name} </span>
    )
  }
}


export default ListItem;
