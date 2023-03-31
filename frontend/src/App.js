import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages and components
import Home from './pages/Home';
import Agents from './pages/Agents';
import Navbar from './components/Navbar';

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
              path="/agents"
              element={<Agents />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
