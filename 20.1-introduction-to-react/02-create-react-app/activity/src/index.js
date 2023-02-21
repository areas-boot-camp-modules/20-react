// TODO: Add a comment giving a brief description of what React is
// It’s a library for creating views.
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// React is the library, ReactDOM is the package that allows you to render React components to the DOM.
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// It renders the App component to the DOM.
ReactDOM.render(<App />, document.getElementById('root'));
