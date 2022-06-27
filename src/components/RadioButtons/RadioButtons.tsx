import React from 'react';
import './RadioButtons.scss';

interface Props {
  onTypeOfChart: (value: string) => void;
  typeOfChart: string;
}

export const RadioButtons = React.memo<Props>(({
  onTypeOfChart,
  typeOfChart,
}) => {
  return (
    <div className="radioButtons">
      <label htmlFor="BarChart">
        Bar chart
        <input
          type="radio"
          name="BarChart"
          id="BarChart"
          value="bar"
          checked={typeOfChart === 'bar'}
          onChange={(event) => onTypeOfChart(event.target.value)}
        />
      </label>
      <label htmlFor="LineChart">
        Line chart
        <input
          type="radio"
          name="LineChart"
          id="LineChart"
          value="line"
          checked={typeOfChart === 'line'}
          onChange={(event) => onTypeOfChart(event.target.value)}
        />
      </label>
      <label htmlFor="RadarChart">
        PolarArea chart
        <input
          type="radio"
          name="PolarArea"
          id="PolarArea"
          value="polarArea"
          checked={typeOfChart === 'polarArea'}
          onChange={(event) => onTypeOfChart(event.target.value)}
        />
      </label>
      <label htmlFor="RadarChart">
        Radar chart
        <input
          type="radio"
          name="RadarChart"
          id="RadarChart"
          value="radar"
          checked={typeOfChart === 'radar'}
          onChange={(event) => onTypeOfChart(event.target.value)}
        />
      </label>
      <label htmlFor="DoughnutChart">
        Doughnut chart
        <input
          type="radio"
          name="DoughnutChart"
          id="DoughnutChart"
          value="doughnut"
          checked={typeOfChart === 'doughnut'}
          onChange={(event) => onTypeOfChart(event.target.value)}
        />
      </label>
    </div>
  );
});
