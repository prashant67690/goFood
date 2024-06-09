import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const categories = [
  "Fruits and Vegetables",
  "Bakery",
  "Meat and Seafood",
  "Beverage",
  "Biscuit and Snacks",
];

const CategorySection = () => {
  const [currItem, setCurrItem] = useState("Meat and Seafood");

  const itemHandler = (e: any) => {
    setCurrItem(e.target.value);
  };

  useEffect(() => {
    console.log(currItem);
  }, [currItem]);

  return (
    <>
      <section className="p-8 bg-white">
        <p className="flex justify-center font-bold m-4 text-lg">
          Shop By Category{" "}
        </p>
        <h2
          className="text-5xl font-bold text-center"
          style={{ fontFamily: "Aperto" }}
        >
          Top Category Of Organic Food
        </h2>
        <div className="mt-4 flex justify-center space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              value={category}
              onClick={itemHandler}
              className={`px-6 py-2 rounded-3xl ${
                currItem === category
                  ? "bg-green-900 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      <ProductList category={currItem} />
    </>
  );
};

export default CategorySection;
