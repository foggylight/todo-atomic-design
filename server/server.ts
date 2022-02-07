import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../client/App';
import { createRouter } from './controllers/tasks.controller';
import { MongoDBTaskGateway } from './gateway/MongoDBTaskGateway';
import { TaskUseCases } from './useCases/TasksUseCases';

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

const serviceName = process.env.SERVICE_NAME || 'localhost';
const servicePort = process.env.SERVICE_PORT || '27017';
const gateway = new MongoDBTaskGateway(serviceName, servicePort);
const useCases = new TaskUseCases(gateway);
const router = createRouter(useCases);

app.use(express.json());
app.use('/tasks', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
