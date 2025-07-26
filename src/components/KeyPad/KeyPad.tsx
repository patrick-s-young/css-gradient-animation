import React from 'react';
import type { CalculatorKey } from '../../Types/Types';
import type { HandleKeyPadClickProps } from '../Calculator/Calculator';
import './keyPad.css';

interface KeyPadProps {
  onClickCallback: HandleKeyPadClickProps
}

const BUTTON_LABELS: CalculatorKey[] = Array.from({length: 9}, (_, index) => index + 1 as CalculatorKey);

export default function KeyPad({onClickCallback}: KeyPadProps): React.JSX.Element {
  return (
      <div className="keypad">
        {BUTTON_LABELS.map((value) => (
          <button 
            key={value} 
            onClick={() => onClickCallback(value)}
          >
            {value}
          </button>
        ))}
      </div>
  )
}