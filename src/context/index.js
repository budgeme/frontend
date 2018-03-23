import React from 'react';
import store from './store';

const Context = React.createContext();

export const connect = (Component) =>
  (props) =>
    <Context.Consumer>
      {(context) => <Component {...props} {...context} />}
    </Context.Consumer>

export const Provider = (props) => {
  return (
    <Context.Provider value={store}>
      {props.children}
    </Context.Provider>
  );
}
