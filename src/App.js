import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Pages/Auth/Login/Login'
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Login/Register/Register';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
