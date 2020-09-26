import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Body } from './components/body/body';
import { Home } from './views/home/home';
import { About } from './views/about/about';

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Body>
                  <Switch>
                      <Route path="/about">
                          <About />
                      </Route>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </Body>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
