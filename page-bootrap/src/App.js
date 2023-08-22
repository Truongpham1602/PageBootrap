import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/layout/home';
import Page2 from './components/layout/page2';
import Page3 from './components/layout/page3';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
