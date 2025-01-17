import { Route, Routes, } from 'react-router-dom';
import Landing from './components/home/landing';
import Login from './components/login/login/login';
import ResponsiveAppBar from './components/materialComponents/navBar';
import ResizeImg from './components/resizeImg/resizeImg';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<><ResponsiveAppBar/><Landing/></>} />
        <Route path='/resize' element={<><ResponsiveAppBar/><ResizeImg/></>} />
      </Routes>
    </div>
  );
}

export default App;
