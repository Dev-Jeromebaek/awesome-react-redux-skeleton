import React from 'react';

import '../assets/css/style.css';
import image from '../assets/images/image.jpg';

function App() {
  return (
    <div>
      <h1 className="hello">Hello React-Redux Skeleton</h1>
      <img src={image} alt="main" />
    </div>
  );
}

export default App;
