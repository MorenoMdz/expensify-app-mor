import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// check if it has rendered already
let hasRendered = false;
const renderApp = () => {
  // if it has not rendered already then render app
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

/* Set loading state */
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

/* When a user first visit the page, it will run this code, and set the current login state to the store */

// onAuthStateChanged takes a callback that returns the user if it authenticated
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('uid', user.uid);
    // send the dispatch to run the login action with the correct user id
    store.dispatch(login(user.uid));
    /* Wait for the initial data to be fetch then render the page */
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname == '/') {
        history.push('/dashboard');
      }
    });
    console.log('Logged in');
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    console.log('Logged out');
  }
});
