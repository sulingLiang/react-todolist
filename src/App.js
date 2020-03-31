import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ContextProvider } from './store/reducer';
import 'antd/dist/antd.css';
import store from './store';
import Todo from './pages/todo';
import Result from './pages/result';

class App extends Component {
  
  render() {
    return (
      <div>
        <ContextProvider store={store}>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Todo} />
              <Route path="/result" exact component={Result} />
            </div>
          </BrowserRouter>
        </ContextProvider>
      </div>
    );
  }
}

export default App;
