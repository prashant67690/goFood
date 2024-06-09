import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [food, setFood] = useState<any>([]);

  const fxn = async (category: string) => {
    if (category == "Bakery") {
      category = "cake";
    } else if (category == "Beverage") {
      category = "Drinks";
    } else if (category == "Biscuit and Snacks") {
      category = "Snacks";
    } else {
      category = category.split(" ")[0];
    }

    const options = {
      method: "GET",
      url: "https://api.spoonacular.com/recipes/complexSearch",
      params: {
        apiKey: "70909640c874485fb060099e0d2c600a",
        query: `${category}`,
        number: 6,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setFood(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (category) {
      fxn(category);
    }
    console.log(category);
  }, [category]);

  return (
    <section className="p-8 bg-white custom-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {food.map((product: any, index: number) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 rounded-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col ">
              <div className="flex justify-between ">
                <h3
                  className="text-3xl font-bold custom-width-text"
                  style={{ fontFamily: "Aperto" }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-green-800 font-bold w-24 text-3xl"
                  style={{ fontFamily: "Aperto" }}
                >
                  $ 8.99
                </p>
              </div>
              <div className="flex mt-3 pt-3 border-t-2 border-dashed border-slate-300 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                </p>
                <button className="py-3 text-green-900 font-semibold text-sm  w-60 flex justify-end">
                  SHOP NOW
                  <FontAwesomeIcon icon={faArrowRight} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
