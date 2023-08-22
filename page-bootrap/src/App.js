import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/layout/home';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
