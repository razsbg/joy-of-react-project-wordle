import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './reset.css';
import './styles.css';

const obj = { coco: 1 };
console.table(obj);

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
