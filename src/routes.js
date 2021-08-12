import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { isAuthenticated } from './Service/auth';

import Home from './Pages/Home';
import Cadastro from './Pages/Cadastrar'

function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      //  antes de aparecer
      opacity: 0,
      position: 'absolute',
      transform: 'translateY(50px)',
    },
    enter: {
      // quando entrar na tela
      opacity: 1,
      position: 'absolute',
      transform: 'translateY(0)',
    },
    leave: {
      // quando sair da tela
      opacity: 0,
      position: 'absolute',
      transform: 'translateY(50)',
    }
  });
  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route component={Home} exact path="/" />
        <Route component={Cadastro} path="/cadastrar" />
      </Switch>
    </animated.div>
  ));
}

export default Routes;