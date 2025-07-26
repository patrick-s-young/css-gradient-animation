import React, { useState } from 'react';
import KeyPad from '../KeyPad/KeyPad';
import Display from '../Display/Display';
import type { CalculatorKey } from '../../Types/Types';
import './calculator.css';

export interface HandleKeyPadClickProps {
  (newValue: CalculatorKey): void
}

const DIGITS_MAX = 6;
const DEFAULT_DISPLAY_VALUE: CalculatorKey[] = [2,3,7];

export default function Calculator(): React.JSX.Element {
  const [displayValue, setDisplayValue] = useState<CalculatorKey[]>(DEFAULT_DISPLAY_VALUE);

  const handleKeyPadClick: HandleKeyPadClickProps = (newValue: CalculatorKey) => {
    setDisplayValue(displayValue => {
      return displayValue.length < DIGITS_MAX
        ? [...displayValue, newValue]
        : [newValue];
    });
  }

  return (
      <div className="calculator">
        <div className="calculator calculator__panel-top">
          <div className="calculator calculator__panel-left"/>
          <div className="calculator calculator__panel-right"/>
          <Display 
            displayValue={displayValue}
          />
          <KeyPad
            onClickCallback={handleKeyPadClick}
          />
          </div>
    </div>
  )
}