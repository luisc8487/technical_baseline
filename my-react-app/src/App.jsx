import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [num, setNum] = useState(0);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setNum((num) => num + 1);
    console.log(query);
  };

  useEffect(() => {
    const doFetch = async () => {
      try {
        const res = await fetch(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=38dc92d2&app_key=54b6c421ceee89d12fbee898d5798da5&ingr=${query}&nutrition-type=cooking`
        );
        const data = await res.json();
        console.log(data);
        console.log(num);
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
    </>
  );
}

export default App;
