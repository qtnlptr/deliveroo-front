import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Categories from "./Categories";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--lxph5qsqcphg.code.run/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header
        title={data.restaurant.name}
        img={data.restaurant.picture}
        description={data.restaurant.description}
      />
      {data.categories.map((elem) => {
        return <Categories category={elem} key={elem.name} />;
      })}
    </div>
  );
}

export default App;
