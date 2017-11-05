import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/app';
import Home from './components/home';
import Counter from './components/counter';
import Info from './components/info';

import reducers from './reducers';

const browserHistory = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route component={App}>
        <IndexRoute component={Home}/>
        <Route path="/counter" component={Counter} />
        <Route path="/info" component={Info} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
