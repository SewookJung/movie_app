import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      {name} {rating}
    </div>
  );
}

const foods = [
  {
    id: 1,
    name: "kimchi",
    rating: 4.5,
  },
  {
    id: 2,
    name: "samgyupsal",
    rating: 5.0,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foods.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
