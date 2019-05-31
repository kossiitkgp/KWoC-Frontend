import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import './styles/App.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/about"
          component={About}
        />
      </div>
    </BrowserRouter>

  );
}

export default App;
