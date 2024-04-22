const CoffeeCart = ({ cof }) => {
  const { photo } = cof;
  return (
    <div className="shadow-lg rounded-lg p-6 ">
      <img src={photo} alt="" />
    </div>
  );
};

export default CoffeeCart;
