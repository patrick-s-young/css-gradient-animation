import './Display.css';
import type { CalculatorKey } from '../../Types/Types';

interface DisplayProps {
  displayValue: CalculatorKey[];
}

export default function Display({displayValue}: DisplayProps): React.JSX.Element {
  const displayString = displayValue.join('');
  return (
    <div className="display">
      <div className="display display__scanlines"></div>
      {displayString}
    </div>
  )
}