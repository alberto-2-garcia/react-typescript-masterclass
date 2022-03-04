import express from 'express';
import path from 'path';
import fs from 'fs';
// import { renderToString } from 'react-dom/server'
// import React from 'react';
// import { Provider } from 'react-redux';
// import { StaticRouter, Switch, Route } from 'react-router-dom';
// import HomePage from '../src/components/HomePage';
// import AboutPage from '../src/components/AboutPage';
// import { createStore, applyMiddleware } from 'redux';
// import { customMiddleware } from '../src/store/middleware/customMiddleware';
// import { anotherMiddleware } from '../src/store/middleware/anotherMiddleware';
// import { rootReducer } from '../src/store/reducer/rootReducer';
// import serialize from 'serialize-javascript';

const app = express();

const htmlFile = path.join(__dirname, '../build/index.html');
const htmlContent = fs.readFileSync(htmlFile, { encoding: 'utf-8' });
// const initialState = { users: ['Rysh', 'May'], fruits: ['apple', 'avocado', '</script><script>window.confirm()</script>'] };
// const store = createStore(rootReducer, initialState, applyMiddleware(customMiddleware, anotherMiddleware));

app.use('/public', express.static('build'));
// app.use(express.static('build'));

app.get('*', (req, res) => {
    // const reactComponentsString = renderToString(
    //     <Provider store={store}>
    //       <StaticRouter basename="/test" location={req.url}>
    //           <Switch>
    //             <Route component={AboutPage} path="/about" />
    //             <Route component={HomePage} path="/" />
    //           </Switch>
    //       </StaticRouter>
    //     </Provider>
    // );

    // res.send(htmlContent
    //     .replace('<div id="root"></div>', `<div id="root">${reactComponentsString}</div>`)
    //     .replace('window.initialState=null',`window.initialState=${serialize(initialState)}`)
    // );
    res.send(htmlContent);
});

app.listen(7777);