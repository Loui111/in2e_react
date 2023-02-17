import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// App보다 더 위인 root가 있음. 전 페이지에 공통된 디자인 (백그라운드 같은거) 는 여기에 선언하고 body쪽에 넣어야 된다. 