// import "./index.css";
import {React, useContext} from "react";
import FoodContext from "../context/FoodContext";
import Card from "./Card";

const CardList = () => {

    const food = useContext(FoodContext);
  return (
    <div>
      {food.map((item, index) => (<Card
          key = {index}
          label = {item.food.label}
          src={item.food.image}
          kcal={item.food.nutrients.ENERC_KCAL}
        />
      ))}
    </div>
  );
};

export default CardList;
