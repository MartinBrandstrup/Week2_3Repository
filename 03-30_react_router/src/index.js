import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './AppNested';

const info = [
  {id: "rendering", title:"Rendering with React",info:"Add some text here"},
  {id: "components", title:"components",info:"Add some text here"},
  {id: "props-v-state", title:"Props v. State",info:"Add some text here"},
  {id: "cool", title:"cool link",info:"dummy text"}
]

ReactDOM.render(
  <React.StrictMode>
    <App info={info}/>
  </React.StrictMode>,
  document.getElementById('root')
);
