import React, { Component } from 'react';
import calculate from '../logic/calculate';

import './calc.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  btnPressed = (e) => {
    if (e.target.innerHTML === 'AC') {
      this.setState({
        total: 0,
        next: null,
        operation: null,
      });
    } else {
      this.setState({ total: e.target.innerHTML });

      const temp = calculate(this.state, e.target.innerHTML);

      const { total, next, operation } = temp;
      this.setState({ total, next, operation });
    }
  };

  render() {
    const { total, next } = this.state;

    return (
      <div className="calc-container">
        <div className="grid-container">
          <input
            type="text"
            className="grid-item input"
            defaultValue={0}
            value={next || total}
          />
          <button type="button" className="grid-item" onClick={this.btnPressed}>
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
