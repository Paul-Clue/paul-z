import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages and components
import Home from './pages/Home';
import Properties from './pages/Properties';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Manager from './pages/Manager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/properties"
              element={<Properties />}
            />
            <Route 
              path="/properties/admin"
              element={<Login />}
            />
            <Route 
              path="/login/password"
              element={<Login />}
            />
            <Route 
              path="/manager"
              element={<Manager />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
