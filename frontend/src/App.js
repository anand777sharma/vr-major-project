import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Admin from './components/admin';
import User from './components/user';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import Home from './components/main/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Navigate to="/main/home" />} path="/"/>
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="pofile" element={<UserProfile />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
