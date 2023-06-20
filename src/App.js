import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./components/recipe-tile";
import { v4 as uuidv4 } from "uuid";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./key";
function App() {
  const [query, setquery] = useState("rice");
  const [recipes, setrecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile key={uuidv4()} recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
