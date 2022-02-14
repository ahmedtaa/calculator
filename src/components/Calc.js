import React, { useState } from 'react';
import calculate from '../logic/calculate';

import './calc.css';

const Calc = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnPressed = (e) => {
    if (e.target.innerHTML === 'AC') {
      setState({
        total: 0,
        next: null,
        operation: null,
      });
    } else {
      setState({ ...state, total: e.target.innerHTML });

      const temp = calculate(state, e.target.innerHTML);

      const { total, next, operation } = temp;
      setState({ total, next, operation });
    }
  };

  const { total, next } = state;

  return (
    <div className="calc-container">
      <div className="grid-container">
        <input
          type="text"
          className="grid-item input"
          defaultValue={0}
          value={next || total}
        />
        <button type="button" className="grid-item" onClick={btnPressed}>
          AC
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          +/-
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          %
        </button>
        <button type="button" className="grid-item orange" onClick={btnPressed}>
          &divide;
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          7
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          8
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          9
        </button>
        <button type="button" className="grid-item orange" onClick={btnPressed}>
          x
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          4
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          5
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          6
        </button>
        <button type="button" className="grid-item orange" onClick={btnPressed}>
          -
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          1
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          2
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          3
        </button>
        <button type="button" className="grid-item orange" onClick={btnPressed}>
          +
        </button>
        <button type="button" className="grid-item zero" onClick={btnPressed}>
          0
        </button>
        <button type="button" className="grid-item" onClick={btnPressed}>
          .
        </button>
        <button type="button" className="grid-item orange" onClick={btnPressed}>
          =
        </button>
      </div>
    </div>
  );
};
export default Calc;
