import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const CoffeeUptade = () => {
  const coffe = useLoaderData();
  const { _id, name, chef, details, supplier, taste, photo, category } = coffe;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { name, chef, details, supplier, taste, photo } = data;
    const formData = {
      _id,
      name,
      chef,
      details,
      supplier,
      taste,
      photo,
      category,
    };
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className=" bg-[#F4F3F0] w-[80%] mx-auto px-[100px] py-[70px]">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Upddate coffee:{name}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee name"
              defaultValue={name}
              className="input input-bordered w-full"
              required
              {...register('name', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee chef"
              defaultValue={chef}
              className="input input-bordered w-full"
              required
              {...register('chef', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-6 my-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee supplier"
              defaultValue={supplier}
              className="input input-bordered w-full"
              required
              {...register('supplier', { required: true })}
            />
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee Taste"
              defaultValue={taste}
              className="input input-bordered w-full"
              required
              {...register('taste', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee Category"
              defaultValue={category}
              className="input input-bordered w-full"
              required
              {...register('category', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee Details"
              defaultValue={details}
              className="input input-bordered w-full"
              required
              {...register('details', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee Photo URL"
              defaultValue={photo}
              className="input input-bordered w-full"
              required
              {...register('photo', { required: true })}
            />
          </div>
        </div>
        <input
          className="btn bg-[#D2B48C] w-full mt-6"
          type="submit"
          value=" Upddate coffee"
        />
      </form>
    </div>
  );
};

export default CoffeeUptade;
