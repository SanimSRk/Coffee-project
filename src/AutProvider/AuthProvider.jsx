import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  const hnadileCreate = (email, passsword) => {
    return createUserWithEmailAndPassword(auth, email, passsword);
  };

  const info = { users, hnadileCreate };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
