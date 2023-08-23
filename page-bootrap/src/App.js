import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/layout/home';
import Page2 from './components/layout/page2';
import Page3 from './components/layout/page3';
import Page4 from './components/layout/page4';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='Page2' element={<Page2 />} />
            <Route path='Page3' element={<Page3 />} />
            <Route path='Page4' element={<Page4 />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
