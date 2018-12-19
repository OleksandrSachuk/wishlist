import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import {Header} from 'modules/common/';
import {Component1} from 'modules/module1/components';

import PrivatePage from './PrivatePage';

const Pages = ({history}: {history: any}) => (
  <ConnectedRouter history={history}>
    <main>
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Component1} />
          <PrivatePage path="/component1" component={Component1} />
        </Switch>
      </React.Suspense>
    </main>
  </ConnectedRouter>
);

export default Pages;
