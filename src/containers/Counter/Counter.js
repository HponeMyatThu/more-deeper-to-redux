import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionType from "../../Store/action"
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.increCounter} />
        <CounterControl label="Decrement" clicked={this.props.decCounter} />
        <CounterControl label="Add 5" clicked={this.props.addCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.removeCounter} />
        <hr />
        {/* <button onClick={this.props.storeResult}>Store</button> */}
        <button onClick={() => this.props.storeResult(this.props.ctr)}>Store</button>
        
        <ul>
          {this.props.storeResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.removeResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("[counter.js] [counter]", state.ctr.counter);
  console.log("[counter.js] [result]", state.res.result);

  return {
    ctr: state.ctr.counter,
    storeResults: state.res.result,
  };
};

const mapDispatcherToProps = (dispatch) => {
  return {
    increCounter: () => dispatch({ type: actionType.INCREMENT }),
    decCounter: () => dispatch({ type: actionType.DECREMENT }),
    addCounter: () => dispatch({ type: actionType.ADD, value: 5 }),
    removeCounter: () => dispatch({ type: actionType.SUBTRACT, value: 5 }),
    storeResult: (result) => dispatch({ type: actionType.STORE_RESULT, result: result }),
    removeResult: (id) => dispatch({ type: actionType.DELETE_RESULT, elId: id }),
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(Counter);
