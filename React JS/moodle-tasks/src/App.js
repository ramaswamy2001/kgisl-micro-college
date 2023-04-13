import logo from './logo.svg';
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle"
import { Portmenu } from './components/portfolio/portfolioo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './components/resume/resume';
import Hello from './components/task1/hello';
import Card from './components/task2/card';
import Super from './components/task-3/super';
import Social from './components/task4/social';
import { Noti } from './components/task5/noti';
import Login from './components/task6/login';
import Tech from './components/task-7/tech';
import Hook from './components/task9/hooks';
import Fruit from './components/task10/fruits';
import Feedback from './components/task11/feedback';
import Thanks from './components/task11/thanks';
import Datefun from './components/task12/date';
import { Project } from './components/task8/reusable';
import { Home } from './components/portfolio/Home';
import { About } from './components/portfolio/about';
import { Education } from './components/portfolio/education';
import { Skill } from './components/portfolio/skills';
import { Contact } from './components/portfolio/contact';
import { Certificate } from './components/portfolio/certification';
import { Welcome } from './components/portfolio/welcome';
import Weather from './task-api/apitask';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Welcome/>,<Portmenu/>,<Home/>,<About/>,<Education/>,<Certificate/>,<Skill/>,<Contact/>]}/>
      <Route path='/Resume' element={<Resume/>}/>
      <Route path='/Hello' element={[<Project/>,<Weather/>]}/>
      <Route path='/Card' element={[<Project/>,<Card/>]}/>
      <Route path='/Super' element={[<Project/>,<Super/>]}/>
      <Route path='/Social' element={[<Project/>,<Social/>]}/>
      <Route path='/Noti' element={[<Project/>,<Noti/>]}/>
      <Route path='/Login' element={[<Project/>,<Login/>]}/>
      <Route path='/Tech' element={[<Project/>,<Tech/>]}/>
      <Route path='/Hooks' element={[<Project/>,<Hook/>]}/>
      <Route path='/Fruit' element={[<Project/>,<Fruit/>]}/>
      <Route path='/Feedback' element={[<Project/>,<Feedback/>]}/>
      <Route path='/Tha' element={[<Project/>,<Thanks/>]}/>
      <Route path='/Datefun' element={[<Project/>,<Datefun/>]}/>
      <Route path='/Project' element={<Project/>}/>
    </Routes>
    </BrowserRouter>
       
    </>
   
  );
}

export default App;
