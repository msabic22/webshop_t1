import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Shop from './containers/Shop/Shop';
import Cart from './containers/Cart/Cart';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Shop} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
