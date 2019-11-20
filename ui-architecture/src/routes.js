import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from "./layouts/home/home"

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * @returns {XML}
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
}
