import { Routes, Route } from 'react-router-dom';
import Contestants from './components/contestants';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Contestants />} />
      </Routes>
    </div>
  );
}

export default App;
