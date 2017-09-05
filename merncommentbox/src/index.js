// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
ReactDOM.render(
  <CommentBox />,
  // url='http://localhost:3001/api/comments'
  // pollInterval={2000} />,
  document.getElementById('root')
);
