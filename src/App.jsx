
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHome from './components/Home/PageHome.jsx';
import PageSec from './components/Courses/PageSec.jsx';
import PageFour from './components/About/PageFour.jsx';

import { Route, Routes } from 'react-router-dom';
import PageThird from './components/OurTeachers/PageThird.jsx';
import PageFive from './components/Contact/PageFive.jsx';

// import "./App.css"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/2A_project' element={<PageHome></PageHome>}/>
        <Route path='/courses' element={<PageSec></PageSec>}/>
        <Route path='/teachers' element={<PageThird></PageThird>}/>
        <Route path='/about' element={ <PageFour></PageFour>}/>
        <Route path='/contact' element={ <PageFive></PageFive>}/>
      </Routes>
    </div>
  )
}

export default App
