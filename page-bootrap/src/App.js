import { Route, Router, Routes } from 'react-router-dom';
import Page from './components/layout/page';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
