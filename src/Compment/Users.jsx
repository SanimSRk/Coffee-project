import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>this pages shwo the useer of firebase:{user.length} </h2>
    </div>
  );
};

export default Users;
