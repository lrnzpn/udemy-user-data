import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';


/*
  My mistake was I forgot to group them by components
  - UI
    - Button
    - Card
    - Modal
  - Users
    - AddUser
    - UserList
*/

function App() {
  const [userData, setUserData] = useState([]);
  
  const addUserHandler = (userData) => {
    setUserData(prevData => {
      /* const updateData = [...prevData];
      updateData.unshift({
        name: userData.name,
        age: +userData.age,
        id: (Math.random()*999).toFixed(2).toString()
      });
      return updateData; */

      // approach done in the lecture but will push it down instead of add to top
      return [
        ...prevData,
        {
          name: userData.name,
          age: +userData.age,
          id: (Math.random()*999).toFixed(2).toString()
        }
      ]
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
