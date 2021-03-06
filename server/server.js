import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';

const app = express();

app.use(express.static('client'));

app.get('*', (req, res) => {
  const html = renderToString(<App />);
  res.type('html').send(
    `<html>
      <head>
        <style>
          html, body { 
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div id="root">
          ${html}
        </div>
        <script src="dist/bundle.js"></script>
      </body>
    </html>`
  );
});

app.listen(3000, () => console.log('http://localhost:3000'));
