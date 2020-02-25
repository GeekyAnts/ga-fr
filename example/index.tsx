import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import framework from '../src';

console.log(framework.Auth);

const App = () => {
  return <div>Test</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
