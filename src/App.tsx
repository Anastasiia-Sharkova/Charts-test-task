import { useState, useCallback } from 'react';
import './App.css';
import { InputForXAxis } from './components/InputForXAxis';
import { InputForYAxis } from './components/InputForYAxis';
import { ChartBlock } from './components/ChartBlock';
import { RadioButtons } from './components/RadioButtons';

const App: React.FC = () => {
  const [label, setLabel] = useState<string[]>(['January', 'February', 'March', 'April', 'May', 'June']);
  const [value, setValue] = useState<number[]>([10, 5, 7, 1, 6, 15]);
  const [typeOfChart, setTypeOfChart] = useState('bar');

  const orderLabel = useCallback((label: string) => {
    const content = label.split(',')
      .filter((item: string) => item.trim().length > 0)
      .map((item: string) => item.trim());

    setLabel(content);
  }, []);

  const orderValue = useCallback((value: string) => {
    const content: number[] = value.split(',')
      .filter((item: string) => item.trim().length > 0)
      .map((item: string) => Number(item.trim()));

    if (content.length > label.length && label.length > 0) {
      setValue(content.slice(0, label.length));
    } else {
      setValue(content);
    }
  }, [label]);

  return (
    <div className="app">
      <h1 className="app__title">Around the sun in 12 months</h1>
      <InputForXAxis onOrderLabel={orderLabel} />
      <InputForYAxis onOrderValue={orderValue} />
      <ChartBlock 
        labels={label}
        values={value}
        typeOfChart={typeOfChart}
      />
      <RadioButtons 
        onTypeOfChart={setTypeOfChart}
        typeOfChart={typeOfChart}
      />
    </div>
  );
};

export default App;
