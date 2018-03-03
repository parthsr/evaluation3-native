import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/Board';

const Complete = () => (
  <Board />
);
const render = () => {
  ReactDOM.render(
    <Complete />,
    document.getElementById('root'),
  );
};


export default render;
