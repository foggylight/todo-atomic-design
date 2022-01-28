import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../client/App';
import { router } from './controllers/tasks.controller';

const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', express.static(path.resolve(__dirname, '../public')));

const manifest = fs.readFileSync(path.join(__dirname, '../public/manifest.json'), 'utf-8');
const assets = JSON.parse(manifest);

app.get('/', (request, response) => {
  const component = ReactDOMServer.renderToString(React.createElement(App));
  response.render('client', { assets, component });
});

app.use('/tasks', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
