import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/layout/home';
import Page2 from './components/layout/page2';
import Page3 from './components/layout/page3';
import Page4 from './components/layout/page4';
import Admin from './components/layout/admin';
import SideBar from './components/layout/sidebar/001';
import Login from './components/layout/login';
function App () {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='Page2' element={<Page2 />} />
            <Route path='Page3' element={<Page3 />} />
            <Route path='Page4' element={<Page4 />} />
          </Route>
          <Route path='admin' element={<Admin />}></Route>
          <Route path='SideBar' element={<SideBar />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
