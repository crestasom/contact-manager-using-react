import React from 'react';
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
function App() {
  return (
    <div className="App">
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add/:id" component={AddContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
