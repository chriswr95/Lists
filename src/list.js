import React, { Component } from 'react';
import ListItem from './ListItem.js';
import AddItem from './AddItem.js';
const uuidv4 = require('uuid');

class List extends Component {
  render(){
    var items = this.props.items;

    return (
      <div id="toDoList" key={uuidv4()}>
        <h3> To Do: </h3>
        <ul> {items.map((item) => {
          return (
            <li key ={uuidv4()}> <ListItem item={item} key={uuidv4()} /> </li>
          )
        })}
        </ul>
        <AddItem addItem={this.props.addItem.bind(this)}/>
      </div>
    )
  }
}


export default List;
