import bowl from "../assets/bowl.png";
import "../index.css";
import lemon from "../assets/lemon.jpg";
import arrow from "../assets/arrow.png";
import leaf from "../assets/leaf.png";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-5 ">
      <div className=" col-span-3 custom-padding custom-height-300 bg-zinc-100">
        <div className="max-w-md ml-6">
          <h2 className="text-2xl font-semibold mb-3">Discount Up to 20%</h2>
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Aperto" }}>
            Buy Fresh And Organic Grocery Food
            <span className="ml-3 absolute">
              <div className="image-container">
                <img src={lemon} alt="Lemon" className="rounded-image " />
              </div>
            </span>
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit
            purus nec nibh tortor ipsum. Placerat Consequat lorem.
          </p>
          <div className="leaf1">
            <img src={leaf} alt="Leaf" className="h-10 w-20" />
          </div>
          <div className="leaf2">
            <img src={leaf} alt="Leaf" className="h-10 w-20" />
          </div>
          <div className="leaf3">
            <img src={leaf} alt="Leaf" className="h-8 w-16" />
          </div>
          <div className="flex ">
            <div className="flex mt-10 py-1 px-6 h-10 bg-green-900 text-white rounded-3xl">
              <button className="w-max">SHOP NOW</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-2 ml-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <div
              className="ml-20 pl-10 mr-0 mt-10 flex space-x-8"
              style={{ fontFamily: "Aperto" }}
            >
              <div className="mr-10">
                <span className="text-4xl font-bold">35k+</span>
                <p className="text-gray-600">Users</p>
              </div>
              <div className="border border-solid border-slate-300 h-14 ">
                {" "}
              </div>
              <div className="pl-10">
                <span className="text-4xl font-bold">18k+</span>
                <p className="text-gray-600">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow" />
      </div>
      <div className=" col-span-2 bg-green-900">
        <img src={bowl} alt="" className="custom-width-200 custom-img " />
      </div>
    </section>
  );
};

export default HeroSection;
