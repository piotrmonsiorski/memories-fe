import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Auth from 'components/Auth/Auth';

const App = () => {
  return (
    <Container maxwidth="lg">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
