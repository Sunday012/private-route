import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useAuth, AuthProvider} from './components/Auth';
import Dashboard from './components/Dashboard'
import AuthWrapper from './wrapper/AuthWrapper'
import Login from './components/Login'
import Header from './components/Header'
import Dashboard2 from './components/Private';
function App() {
  const auth = useAuth()
  return (
    <div className="App">
      <Header />

      <AuthProvider>
       <Routes>
         <Route path='/dashboard' element={<AuthWrapper condition={auth} children = {<Dashboard/>} />} />
         <Route path='/login' element={<Login />} />
         <Route path='/private' element={<Dashboard2 />} />
       </Routes>
    </AuthProvider>
    </div>

    
  );
}

export default App;
