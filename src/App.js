import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Recommendations from './components/Recommendations';
import Loading from './components/Loading';


function App() {
  return (
    <BrowserRouter basename='/PaulGallagher37/what_to_play'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recommendations" element={<Recommendations/>} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
