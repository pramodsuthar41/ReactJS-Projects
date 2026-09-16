import { useState } from "react";

const allBrands = [
  { id: "1", brand: "adidas" },
  { id: "2", brand: "nike" },
  { id: "3", brand: "reebok" },
  { id: "4", brand: "puma" },
  { id: "5", brand: "decathlon" },
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState([]);

  const onAddToCartClick = (id) => {
    const selectedItem = allBrands.find((item) => item.id === id);

    setSelectedBrand((prev) => [...prev, selectedItem]);
  };

  const onRemoveClick = (id) => {
    const filteredItems = selectedBrand.filter((item) => item.id !== id);

    setSelectedBrand(filteredItems);
  };

  return (
    <>
      <p>Add product to cart</p>

      {allBrands.map((brand) => (
        <div key={brand.id}>
          <span>{brand.brand}</span>

          <button onClick={() => onAddToCartClick(brand.id)}>
            Add To Cart
          </button>
        </div>
      ))}

      <div>
        <h2>Your Cart</h2>

        {selectedBrand.map((brand) => (
          <p key={brand.id}>
            {brand.brand} -{" "}
            <button onClick={() => onRemoveClick(brand.id)}>Remove</button>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
