import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app') );
