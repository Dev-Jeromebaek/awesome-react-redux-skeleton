import React from 'react';

import '../assets/css/style.css';
import image from '../assets/images/image.jpg';

function App() {
  const title = 'Hello React Redux Skeleton';
  return (
        <div className="main">
            <h1 className="hello">{title}</h1>
            <img src={image} alt="main" />
        </div>
  );
}

export default App;
