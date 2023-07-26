import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {

  const [isLoadin, setIsLoadind] = useState(false)
  const [query, setQuery] = useState('')
  const [recipe, setRecipe] = useState([])
  return (
    <div className="container">
        <h2>Our Recipe App</h2>
    </div>
  );
}

export default App;
