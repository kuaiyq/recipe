import React, { useEffect } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  console.log("received here");
  console.log(recipe["recipe"]["image"]);
  console.log(uuidv4());
  //recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&
  return (
    <div
      className="recipeTile"
      onClick={() => window.open(recipe["recipe"]["url"])}
      key={uuidv4()}
    >
      <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
      <p className="recipeTile__name" key={uuidv4()}>
        {recipe["recipe"]["label"]}
      </p>
    </div>
  );
}
