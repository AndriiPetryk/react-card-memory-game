import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InitialPageContainer from "./components/initial-page";
import CardsGame from "./components/cardsGame";
import ResultPage from "./components/result-page";

import store from './redux/reducers/store';

export const history = createBrowserHistory({});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" component={InitialPageContainer} exact />
        <Route path="/game" component={CardsGame} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);
