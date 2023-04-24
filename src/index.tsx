import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './common/fonts/Lato-Black.ttf'
import './common/fonts/Lato-Bold.ttf'
import './common/fonts/Lato-Regular.ttf'
import {ApolloProvider} from "@apollo/client";
import client from "./common/apollo-client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);
