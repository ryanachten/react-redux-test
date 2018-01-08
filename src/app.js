import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
  <div>
    Dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    Add expense page component
  </div>
);

const EditExpensePage = () => (
  <div>
    Edit expense page component
  </div>
);

const HelpPage = () => (
  <div>
    Help page component
  </div>
);

const NotFoundPage = () => (
  <div>
    404 page component
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app') );
