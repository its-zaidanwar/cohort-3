import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Register
        setToggle={setToggle}
        setUsers={setUsers}
      />

      {users.map((elem, index) => (
        <UserCard
          key={index}
          users={elem}
        />
      ))}
    </div>
  );
};

export default App;