import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
// Initialize languages
import 'locales/i18n';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

import { corsProxyServerURL } from 'constants/proxyConstants';
const myEnv = dotenv.config();
dotenvExpand(myEnv);
console.log('*** INDEX ***');
console.log(process.env);
const apiURL =
  process.env.REACT_APP_USE_LOCAL_API === 'TRUE' ? process.env.REACT_APP_DEV_API : process.env.REACT_APP_HEROKU_API;
console.log({ apiURL });
export const client = new ApolloClient({
  uri: `${corsProxyServerURL}/${apiURL}`, //
  cache: new InMemoryCache()
});

ReactDOM.render(
  <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
serviceWorker.unregister();
