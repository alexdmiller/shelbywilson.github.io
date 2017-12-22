import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Patterns from './components/patterns/Patterns';
import Newsfeed from './components/news/Newsfeed';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
      </Route>
      <Route path="/patterns" component={App}>
        <IndexRoute component={Patterns} />;
      </Route>
      <Route path="/news" component={App}>
        <IndexRoute component={Newsfeed} />;
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
