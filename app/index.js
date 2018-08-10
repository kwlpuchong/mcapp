import React from 'react';
import MainNavigator from './containers/MainNavigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import NavigationService from './service/NavigationService';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default class App extends React.Component {
  render() {
    const store = createStore(
      reducers,
      {},
      /*applyMiddleware(ReduxThunk),*/
      composeEnhancers(applyMiddleware(ReduxThunk), applyAppStateListener())
    );
    return (
      <Provider store={store}>
        <MainNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
