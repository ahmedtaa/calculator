import React, { Component } from 'react';
import './calc.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = { inputDisplay: 0 };
  }

  // eslint-disable-next-line class-methods-use-this
  btnPressed = (e) => {
    this.setState({ inputDisplay: e.target.innerHTML });
  };

  render() {
    const { inputDisplay } = this.state;
    return (
      <div className="calc-container">
        <div className="grid-container">
          <input
            type="text"
            className="grid-item input"
            defaultValue={inputDisplay}
            value={inputDisplay}
          />
          <button type="button" className="grid-item">
            AC
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            +/-
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            %
          </button>
          <button
            type="button"
            className="grid-item orange"
            onClick={this.btnPressed}
          >
            &divide;
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            7
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            8
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            9
          </button>
          <button
            type="button"
            className="grid-item orange"
            onClick={this.btnPressed}
          >
            x
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            4
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            5
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            6
          </button>
          <button
            type="button"
            className="grid-item orange"
            onClick={this.btnPressed}
          >
            -
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            1
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            2
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            3
          </button>
          <button
            type="button"
            className="grid-item orange"
            onClick={this.btnPressed}
          >
            +
          </button>
          <button
            type="button"
            className="grid-item zero"
            onClick={this.btnPressed}
          >
            0
          </button>
          <button type="button" className="grid-item" onClick={this.btnPressed}>
            .
          </button>
          <button
            type="button"
            className="grid-item orange"
            onClick={this.btnPressed}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
