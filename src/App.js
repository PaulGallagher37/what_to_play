import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Recomendations from './components/Recomendations';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recomendations" element={<Recomendations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
