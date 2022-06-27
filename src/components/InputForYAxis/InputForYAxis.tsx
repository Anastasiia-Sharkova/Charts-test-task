import React, { useCallback, useState } from 'react';
import '../../styles/input.css';

interface Props {
  onOrderValue: (value: string) => void;
}

export const InputForYAxis = React.memo<Props>(({ onOrderValue }) => {
  const [valueY, setValueY] = useState('10, 5, 7, 1, 6, 15');
  const [isErrorValueY, setIsErrorValueY] = useState<string | null>(null);

  const isValidateMessage = useCallback(() => {
    if (!valueY.trim()) {
      setIsErrorValueY('Please enter the label!');
    }

    if (!/^[ -,0-9]+$/.test(valueY)) {
      setIsErrorValueY('Please, enter numbers separated by commas!')
    }

    if (!valueY.trim() || !/^[ -,0-9]+$/.test(valueY)) {
      return false;
    }

    return true;
  }, [valueY]);

  const handleFocusValueEvent = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (isValidateMessage()) {  
      onOrderValue(valueY);
    };
    setValueY(event.target.value)
  }, [valueY, isValidateMessage, onOrderValue]);

  const handleInputYChange = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidateMessage()) {  
      onOrderValue(valueY);
    };
    window.scrollTo(0, document.documentElement.clientHeight);
  }, [isValidateMessage, onOrderValue, valueY]);

  return (
    <form
      name="Y-axis-values"
      className="input__label"
      onSubmit={handleInputYChange}
    >
      <label 
        htmlFor="inputY-axis"
        className="input__label"
      >
        Y axis values:
        {isErrorValueY
          && <div className="input__error">{isErrorValueY}</div>} 
        <input
        className="input"
          type="text"
          id="inputY-axis"
          name="inputY-axis"
          placeholder="1, 2, 3..."
          title="Please, enter numbers separated by commas!"
          pattern='^[ -,0-9]+$'
          value={valueY}
          onBlur={handleFocusValueEvent}
          onChange={(event) => {
            setValueY(event.target.value);
            setIsErrorValueY(null);
          }}
        />
      </label>

      <button hidden type="submit" />
    </form>
  );
});