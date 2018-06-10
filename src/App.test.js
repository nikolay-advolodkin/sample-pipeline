import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TemperatureCalculations} from "./App"

const assert = require('assert');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calculates Celsius correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedF = 32
  const actualF = calc.toFahrenheit(0);

  assert.equal(actualF, expectedF);
});

it('calculates Celsius correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedC = 100
  const actualC = calc.toCelsius(212);

  assert.equal(actualC, expectedC);
});