import React from 'react';
import './KeyPad.css';
import type { CalculatorKey } from '../../Types/Types';
const BUTTON_LABELS: CalculatorKey[] = Array.from({length: 9}, (_, index) => index + 1 as CalculatorKey);

interface KeyPadProps {
  onClickCallback: (label: CalculatorKey) => void
}

export const KeyPad: React.FC<KeyPadProps> = ({onClickCallback}) => {

  return (
      <div className="KeyPad-wrapper">
        {BUTTON_LABELS.map((label) => (
          <button 
            className={`key-${label}`}
            key={label} 
            onClick={() => onClickCallback(label)}
          >
            {label}
          </button>
        ))}
      </div>
  )
}