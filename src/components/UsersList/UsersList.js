import Card from "../Card/Card";
import styles from './UsersList.module.css'

const UsersList = (props) => {
  return <Card className={styles.users}>
    <ul>
      {props.users.map(userData => {
        return (
          <li key={userData.id}>
            {userData.name} ({userData.age} {userData.age > 1 ? 'years' : 'year'} old)
          </li>
        )
      })}
    </ul>
  </Card>
}

export default UsersList;