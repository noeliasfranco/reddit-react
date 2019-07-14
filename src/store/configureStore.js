import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

// In order to use the devtools (https://github.com/gaearon/redux-devtools)
// we prepare it to enhance the store.
const devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default function configureStore(initialState) {
  return createStore(
    combineReducers({
      reducers,
    }),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        logger,
      ),
      devtools
    )
  );
}
