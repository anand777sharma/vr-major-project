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
import Dashboard from './components/admin/Dashboard';
// 
import ManageUser from './components/admin/ManageUser';
// 
import AddArtwork from './components/user/AddArtwork';
import ManageArtwork from './components/user/ManageArtwork';

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
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="header" element={<Header />} /> */}
            <Route path="manageUser" element={<ManageUser />} />
          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="pofile" element={<UserProfile />} />
            {/* <Route path="header" element={<Header />} /> */}
            <Route path="addartwork" element={<AddArtwork />} />
            <Route path="manageArtwork" element={<ManageArtwork />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
