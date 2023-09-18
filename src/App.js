import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [userData, setUserData] = useState([]);
  
  const addUserHandler = (userData) => {
    setUserData(prevData => {
      const updateData = [...prevData];
      updateData.unshift({
        name: userData.name,
        age: +userData.age,
        id: (Math.random()*999).toFixed(2).toString()
      });
      return updateData;
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userData.length > 0 && <UsersList users={userData} />}
    </div>
  );
}

export default App;
