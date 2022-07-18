import logo from './logo.svg';
import './App.css';
import SighUp from './components/SighUp';
import Login from './components/Login';
import Account from './components/Account';
import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SighUp />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;

