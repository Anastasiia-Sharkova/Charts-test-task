import React, { useState, useCallback } from 'react';
import '../../styles/input.scss';

interface Props {
  onOrderLabel: (value: string) => void;
}

export const InputForXAxis = React.memo<Props>(({ onOrderLabel }) => {
  const [labelX, setLabelX] = useState('January, February, March, April, May, June');
  const [isErrorLabelX, setIsErrorLabelX] = useState<string | null>(null);
  const test = /^[ ,a-zA-Z]+$/;

  const isValidateMessage = useCallback(() => {
    if (!labelX.trim()) {
      setIsErrorLabelX('Please enter the label!');
      return false;
    }

    if (!test.test(labelX)) {
      setIsErrorLabelX('Please, enter lables separated by commas!');
      return false;
    }

    return true;
  }, [labelX]);

  const handleFocusLabelEvent = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (isValidateMessage()) {  
      onOrderLabel(labelX);
    };
    setLabelX(event.target.value)
  }, [labelX, isValidateMessage, onOrderLabel]);

  const handleLabelChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidateMessage()) {
      onOrderLabel(labelX);
    }
    window.scrollTo(0, document.documentElement.clientHeight);
  };

  return (
    <form
      name="X-axis-values"
      className="input__label"
      onSubmit={handleLabelChange}
      >
      <label htmlFor="inputX-axis">
        X axis values:
        {isErrorLabelX
          && <div className="input__error">{isErrorLabelX}</div>}
        <input
          className="input"
          type="text"
          pattern="^,\[a-zA-Z]+$"
          title="Please, enter tags separated by commas!"
          id="inputX-axis"
          name="inputX-axis"
          placeholder="January, February, March..."
          minLength={3}
          value={labelX}
          onBlur={handleFocusLabelEvent}
          onChange={event => {
            setLabelX(event.target.value);
            setIsErrorLabelX(null);
          }}
        />
      </label>
    </form>
  );
});