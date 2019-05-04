import React from 'react';
import './App.css';
import MemeContainer from './containers/MemeContainer';
import { useCache } from './hooks';
import { CacheContext } from './context/CacheContext';

function App() {
  let [cache, setCache] = useCache();
  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      <div className="App">
        <MemeContainer />
      </div>
    </CacheContext.Provider>
  );
}

export default App;
