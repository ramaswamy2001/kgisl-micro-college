import logo from './logo.svg';
import Hello from './components/task1/hello'
import Resume from './components/resume/resume';
import Card from './components/task2/card';
import Super from './components/task-3/super';
import Social from './components/task4/social';
import { Noti } from './components/task5/noti';
import Login from './components/task6/login';
import Tech from './components/task-7/tech';
import Reuse from './components/task8/reusable';
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hook from './components/task9/hooks';
import Fruit from './components/task10/fruits';
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={[<Reuse/>,<Hello/>]}/>
            <Route path='/card' element={[<Reuse/>,<Card/>]}/>
            <Route path='/super' element={[<Reuse/>,<Super/>]}/>
            <Route path='/social' element={[<Reuse/>,<Social/>]}/>
            <Route path='/Noti' element={[<Reuse/>,<Noti/>]}/>
            <Route path='/login' element={[<Reuse/>,<Login/>]}/>
            <Route path='/tech' element={[<Reuse/>,<Tech/>]}/>
            <Route path='/hooks' element={[<Reuse/>,<Hook/>]}/>
            <Route path='/fruits' element={[<Reuse/>,<Fruit/>]}/>
            
          </Routes>

      </BrowserRouter>
      
      
    </>
   
  );
}

export default App;