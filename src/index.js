import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './containers/Main';
import configureStore from './store/configureStore';
import './index.scss';

const store = configureStore();

const AppRouter = () => (
  <Router>
    <div className="full">
      <Switch> 
  	    <Route exact path="/" component={Main} />
  	    <Route component={NotFound} />
  	  </Switch>    
    </div>
  </Router>
)

const NotFound = ({ location }) => (
  <div>
      <p className="no-match">
	    Oops! Something went wrong
	  </p>
  </div>
);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
