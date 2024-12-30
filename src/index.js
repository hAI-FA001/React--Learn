import React from 'react';
import ReactDOM from 'react-dom/client';


const Greeting = () => <h2>First Compo</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);