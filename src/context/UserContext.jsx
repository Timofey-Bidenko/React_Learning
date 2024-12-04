import { createContext, useState } from "react";

export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");

  const userValue = {
    username: username,
    setUsername: setUsername,
  };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
