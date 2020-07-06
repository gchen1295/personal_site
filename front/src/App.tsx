import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/global/Navbar';
import About from './components/About/About';

function App() {
  return (
    <div className='app-main bg-light'>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' exact component={About}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
