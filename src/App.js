import './App.css';
import { RecipeDetail } from './pages/RecipeDetail';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeName" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
