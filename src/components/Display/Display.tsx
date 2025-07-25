import './Display.css';
import type { CalculatorKey } from '../../Types/Types';

interface DisplayProps {
  display: CalculatorKey[];
}

export const Display: React.FC<DisplayProps> = ({display}) => {
  const displayString = display.join('');
  return (
    <div className="Display-wrapper">
      <div className="gradient"></div>
      <div className="scanlines"></div>
      <span className="Display-display">{displayString}</span>
    </div>
  )
}