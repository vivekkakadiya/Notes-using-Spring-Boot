import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from "react-router-dom"
import { Singup } from './component/Singup';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  );
}

export default App;
