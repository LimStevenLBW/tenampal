
import NavBarDesign from './components/NavBarDesign';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import FrontPage from './tabs/FrontPage';
import Menu from './tabs/Menu';

function App() {
  return (
    <div className="App">

      <NavBarDesign />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>


    </div >
  );
}

export default App;
