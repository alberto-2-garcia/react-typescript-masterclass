import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server'
import React from 'react';
import { Provider } from 'react-redux';
import { Routes as Switch, Route } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";
import Home from '../src/components/Home';
import NotesPage from '../src/components/NotesPage';
import { createStore, applyMiddleware } from 'redux';
import { notesReducer, Note } from '../src/reducers/NotesAction';
import serialize from 'serialize-javascript';

const app = express();

const htmlFile = path.join(__dirname, '../build/index.html');
const htmlContent = fs.readFileSync(htmlFile, { encoding: 'utf-8' });
const note: Note = {
    title: 'Note title',
    body: 'Note body',
    lastModified: new Date()
}
const store = createStore(notesReducer, [note]);

app.use('/public', express.static('build'));

app.get('*', (req, res) => {
    const reactComponentsString = renderToString(
        <Provider store={store}>
          <StaticRouter basename="/test" location={req.url}>
              <Switch>
                <Route element={NotesPage} path="/about" />
                <Route element={Home} path="/" />
              </Switch>
          </StaticRouter>
        </Provider>
    );

    res.send(htmlContent
        .replace('<div id="root"></div>', `<div id="root">${reactComponentsString}</div>`)
        .replace('window.initialState=null',`window.initialState=${serialize([note])}`)
    );
    res.send(htmlContent);
});

app.listen(7777);