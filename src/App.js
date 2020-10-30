import React from 'react';
import './App.css';
import Counter from './components/counter';
import CounterDisplay from './components/counterDisplay';
import { Provider } from 'react-redux'
import store from './store';
import SimpleText from './components/simpleText';

function App() {
  return (
    <Provider store={store}>
      <div >
        <CounterDisplay />
        <Counter />
        <SimpleText />
      </div>
    </Provider>
  );
}

export default App;
