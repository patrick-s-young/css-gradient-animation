import React, { useState } from 'react';
import { KeyPad } from '../KeyPad/KeyPad';
import { Display } from '../Display/Display';
import type { CalculatorKey, NumberKey } from '../../Types/Types';
import './Calculator.css';

const DIGITS_MAX = 6;


export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<CalculatorKey[]>([]);

  const handleKeyPadClick = (label: CalculatorKey) => {
    setDisplay(display => {
      return display.length < DIGITS_MAX
        ? [...display, label]
        : [label];
    });
  }

  return (
      <div className="Calculator-container">
        <div className="Calculator-parent">
          <div className="Calculator-left-side"/>
          <div className="Calculator-right-side"/>
          <Display 
            display={display}
          />
          <KeyPad
            onClickCallback={handleKeyPadClick}
          />
          </div>
    </div>
  )
}