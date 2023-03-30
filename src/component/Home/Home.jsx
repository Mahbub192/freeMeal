import React, { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";

const Home = () => {
  const [loadData, setLoadData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((rest) => rest.json())
      .then((data) => setLoadData(data.categories));
  }, []);

  const handelFoodCollection = (id, strCategory, price) => {
    const getFoodListFromLocalStorage = JSON.parse(
      localStorage.getItem("foodList")
    );
    console.log(getFoodListFromLocalStorage);

    if (getFoodListFromLocalStorage) {
      console.log("yes, here is some element");
      const newList = [...cart, { id: id, name: strCategory, price: price }];
      setCart(newList);
      localStorage.setItem("foodList", JSON.stringify(newList));
    } else {
      localStorage.setItem("foodList", JSON.stringify(cart));
    }
  };
  return (
    <div className="flex gap-10">
      <div className="grid grid-cols-3 gap-5 w-9/12">
        {loadData.map((singleData, index) => {
          let price = parseInt(Math.random() * 100 + 100);
          return (
            <SingleFood
              key={index}
              singleData={singleData}
              price={price}
              handelFoodCollection={handelFoodCollection}
            ></SingleFood>
          );
        })}
      </div>
      <div className="1/12"></div>
    </div>
  );
};

export default Home;
