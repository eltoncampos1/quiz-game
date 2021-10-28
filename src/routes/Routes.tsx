import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import { Results } from "../screens/Results";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={App} path="/" exact />
      <Route component={Results} path="/results" />
    </Switch>
  </BrowserRouter>
);
