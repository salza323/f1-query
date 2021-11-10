import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import F1Data from './Componenets/f1Data';

function App() {
  return (
    <div className='App'>
      <Router>
        {' '}
        <Routes>
          {' '}
          <Route to path='/data' element={<F1Data />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
