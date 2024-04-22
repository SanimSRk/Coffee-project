import { useForm } from 'react-hook-form';

const AddCart = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { name, chef, details, supplier, taste, photo } = data;

    const formData = { name, chef, details, supplier, taste, photo };
    console.log(formData);
    fetch('http://localhost:5000/coffees', {
      method: 'POST',
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
    <div className="bg-[#F4F3F0] w-[80%] mx-auto px-[100px] py-[70px]">
      <div className=" lg:w-3/4 mx-auto text-center">
        <h2 className="text-5xl font-medium">Add New Coffee</h2>
        <p className="my-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee name"
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
              className="input input-bordered w-full"
              required
              {...register('photo', { required: true })}
            />
          </div>
        </div>
        <input
          className="btn bg-[#D2B48C] w-full mt-6"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCart;
