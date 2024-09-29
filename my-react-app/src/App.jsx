import {useState, useEffect} from "react";
import CardList from "./components/CardList";
import FoodContext from "./context/FoodContext";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [num, setNum] = useState(0);
  const [food, setFoods] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setNum((num) => num + 1);

    // here tried to set the response that would be stored in Food to a limit of three but didnt work
    setFoods((food) => [...food].slice(0, 3));
  };

  useEffect(() => {

    const doFetch = async () => {
      try {
        const res = await fetch(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=38dc92d2&app_key=54b6c421ceee89d12fbee898d5798da5&ingr=${query}&nutrition-type=cooking`
        );
        const data = await res.json();
        setNum(num);
        setFoods([...data.hints]);
        return data;
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    if (num > 0) {
      doFetch();
    }
  }, [num]);
  return (
    <>
      <h1>Technical Baseline | Future Coders</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter food you want to search"
          required
          value={query}
          onChange={handleChange}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
      <FoodContext.Provider value={food}>
        <CardList/>
      </FoodContext.Provider>
    </>
  );
}

export default App;
