import { useEffect, useState, useReducer } from "react";
import './App.css';
import soup from "./images/soup.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Est. {year}</p>
    </header>
  )
}
const items = [
  "Cajun Chicken & Andouille Sausage Alfredo Penne",
  "Ribeye and Loaded Baked Potato",
  "Lobster Macaroni and Cheese",
  "Chicken and Gnocchi Soup"
];

const disdObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({ dishes, openStatus,onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h2>Welcome to my restaurant, I hope you enjoy! {openStatus ? "Open" : "Closed"} </h2>
      </div>
      <main>
        <img src={soup} height={200} alt="Two bowls of Chicken and Gnocchi soup" />
        <ul>
          {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

function App() {
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

useEffect(() => {
  console.log(`The restaurant is ${status ? "Open" : "Closed"}`);
}, [status]);

  return (
  <div>
    <h1>
      The restaurant is currently{" "}
      {status ? "Open" : "Closed"}.
    </h1>
    <button onClick={toggle}>
      {status ? "Close" : "Open"} Restaurant
    </button>
    <Header name="Ashley" year={1989} />
    <Main dishes={disdObjects} openStatus={status} onStatus={toggle} />
  </div>);
}

export default App