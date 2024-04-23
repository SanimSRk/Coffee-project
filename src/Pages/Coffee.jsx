import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCart from '../Compment/CoffeeCart';
import { useState } from 'react';

const Coffee = () => {
  const coffeeDataLoder = useLoaderData();
  const [coffeeData, setCoffeeData] = useState(coffeeDataLoder);
  return (
    <div className="w-[85%] mx-auto">
      <h2>This is coffee section </h2>
      <Link to={'/addCart'}>
        <button className="btn">Add cart</button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {coffeeData.map((cof, idex) => (
          <CoffeeCart
            key={idex}
            cof={cof}
            setCoffeeData={setCoffeeData}
            coffeeData={coffeeData}
          ></CoffeeCart>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
