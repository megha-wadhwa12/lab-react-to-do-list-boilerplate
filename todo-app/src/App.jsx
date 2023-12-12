import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0) {
      //if input has empty string
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
    }
  };

  updateItem = (newItem, index) => {
    let arr = this.state.todoList;

    // update using splice
    arr.splice(index, 1, newItem);

    // change the state
    this.setState({
      todoList: arr,
    });
  };

  deleteItem = (index) => {
    let arr = this.state.todoList;
    arr.splice(index, 1);

    this.setState({
      todoList: arr,
    });
  };
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    let buttonStyle = {
      backgroundColor: "lightblue",
      margin: "0.5rem",
    };
    return (
      <>
        <h1>Todo-List</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>Add</button>
        </form>
        <p>My input : {this.state.input}</p>

        <div className="todoList">
          <h2> ⬇️ 🚀 LIST 🚀 ⬇️</h2>
          {this.state.todoList.length == 0 ? (
            <h2>List is Empty</h2>
          ) : (
            this.state.todoList.map((e, i) => {
              return (
                <TodoItem
                  e={e}
                  i={i}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                  buttonStyle={buttonStyle}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
}
