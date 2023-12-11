import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Activities, CreateGroup, Expenses, Footer, Home, Navbar, SignIn, SignUp} from './components';

function App() {
return(
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/activities' element={<Activities/>}/>
      <Route path='/create-group' element={<CreateGroup/>}/>
      <Route path='/expenses' element={<Expenses/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
);
}

export default App;
