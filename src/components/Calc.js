import React, { Component } from 'react';
import './calc.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = { inputDisplay: 0 };
  }

  render() {
    const { inputDisplay } = this.state;
    return (
      <div className="calc-container">
        <div className="grid-container">
          <input
            type="text"
            className="grid-item input"
            defaultValue={inputDisplay}
          />
          <button type="button" className="grid-item">
            AC
          </button>
          <button type="button" className="grid-item">
            +/-
          </button>
          <button type="button" className="grid-item">
            %
          </button>
          <button type="button" className="grid-item orange">
            &divide;
          </button>
          <button type="button" className="grid-item">
            7
          </button>
          <button type="button" className="grid-item">
            8
          </button>
          <button type="button" className="grid-item">
            9
          </button>
          <button type="button" className="grid-item orange">
            x
          </button>
          <button type="button" className="grid-item">
            4
          </button>
          <button type="button" className="grid-item">
            5
          </button>
          <button type="button" className="grid-item">
            6
          </button>
          <button type="button" className="grid-item orange">
            -
          </button>
          <button type="button" className="grid-item">
            1
          </button>
          <button type="button" className="grid-item">
            2
          </button>
          <button type="button" className="grid-item">
            3
          </button>
          <button type="button" className="grid-item orange">
            +
          </button>
          <button type="button" className="grid-item zero">
            0
          </button>
          <button type="button" className="grid-item">
            .
          </button>
          <button type="button" className="grid-item orange">
            =
          </button>
        </div>
      </div>
    );
  }
}
