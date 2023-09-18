import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const [user, setUser] = useState({
    name: '',
    age: ''
  });
  const [invalid, setInvalid] = useState({
    isEmpty: false,
    ageInvalid: false
  });

  const inputChangeHandler = (input, value) => {
    setUser(prevState => {
      return {
        ...prevState,
        [input]: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(user.name.trim().length === 0 || user.age.trim().length === 0) {
      setInvalid({
        ...invalid, 
        isEmpty: true
      });
      return;
    } else if (user.age <= 0) {
      setInvalid({
        isEmpty: false,
        ageInvalid: true
      });
      return;
    }
    const userData = {
      name: user.name,
      age: user.age
    }
    props.onAddUser(userData);
    setUser({
      name: '',
      age: ''
    });
    setInvalid({
      isEmpty: false,
      ageInvalid: false
    });
  }

  const eventHandler = () => {
    setInvalid({
      isEmpty: false,
      ageInvalid: false
    });
  }

  return <Card className={styles.input}>
    <form onSubmit={submitHandler}>
      <p>
        <label>Username</label>
        <input type="text" 
          onChange={event => inputChangeHandler('name', event.target.value)}  
          value={user.name}
        />
      </p>
      <p>
        <label>Age (Years)</label>
        <input type="number" 
          onChange={event => inputChangeHandler('age', event.target.value)}     
          value={user.age}
        />
      </p>
      <Button type="submit">Add User</Button>
    </form>
    {(invalid.isEmpty || invalid.ageInvalid) && (
      <ErrorModal eventHandler={eventHandler}>
        {invalid.isEmpty && <p>Please enter a valid name and age (non-empty values).</p>}
        {invalid.ageInvalid && <p>Please enter a valid age ({">"}0).</p>}
      </ErrorModal>
    )}
  </Card>
}

export default AddUser;