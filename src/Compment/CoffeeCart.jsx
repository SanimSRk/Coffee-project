import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCart = ({ cof, setCoffeeData, coffeeData }) => {
  const { _id, name, chef, details, supplier, taste, photo } = cof;
  const handileClickDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: 'delete',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const result = coffeeData.filter(cofs => cofs._id !== _id);
              setCoffeeData(result);
            }
          });
      }
    });
  };
  return (
    <div className="shadow-lg rounded-lg p-6 ">
      <div className="flex  gap-3">
        <img src={photo} alt="" />
        <div>
          <h2 className="my-3">Name : {name}</h2>
          <h2>chef : {chef}</h2>
          <h2 className="mt-3">taste : {taste}</h2>
        </div>
        <div>
          <div className="join join-vertical gap-y-3">
            <button className="btn join-item ">View</button>
            <Link to={`/updates/${_id}`}>
              <button className="btn join-item ">Edit</button>
            </Link>
            <button
              onClick={() => handileClickDelete(_id)}
              className="btn join-item bg-red-500"
            >
              Dlete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
