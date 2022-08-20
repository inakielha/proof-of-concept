import { Route, Routes, } from 'react-router-dom';
import Landing from './components/home/landing';
import ResizeImg from './components/resizeImg/resizeImg';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element = {<Landing></Landing>}/>
      <Route path='/resize' element = {<ResizeImg></ResizeImg>}/>
      </Routes>
    </div>
  );
}

export default App;
