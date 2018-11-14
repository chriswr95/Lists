import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      currentItem: {}
    }
  }

  handleAddItem(addItemState){
    var state = this.state;
    state.items.push(addItemState.newItem);
    this.setState(state);
  }

  handleRemoveItem(listItemState){
    var itemToRemove = listItemState.item;
    var state = this.state;
    var index;
    if((index = state.items.indexOf(itemToRemove)) != -1){
      state.items.splice(index, 1);
    }
    this.setState(state);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="List" className="List">
          <List   items={this.state.items}
                  addItem={this.handleAddItem.bind(this)}
                  removeItem={this.handleRemoveItem.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
