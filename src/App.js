import { createContext, useState } from 'react';
import './App.css';
import FetchToRenderData from './components/FetchToRenderData';
import LineChart from './components/LineChart';

export const ContextValue = createContext(null)
function App() {
  const [updatedValue, setUpdatedValue] = useState([])
  const [value, setValue] = useState([])
  return (
    <ContextValue.Provider value={[value, setValue, updatedValue, setUpdatedValue]}>
      <div className="App">
      <h1>Hello</h1>
      <FetchToRenderData/>
      <LineChart/>
    </div>
    </ContextValue.Provider>
    
  );
}

export default App;
