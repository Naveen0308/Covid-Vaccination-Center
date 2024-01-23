// UserContext.js
import { createContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [emailId, setEmailId] = useState(null);

  return (
    <UserContext.Provider value={{ userId, setUserId, emailId, setEmailId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
