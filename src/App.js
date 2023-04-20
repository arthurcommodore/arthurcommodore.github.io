import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
