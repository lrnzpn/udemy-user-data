import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    // added onClick event to backdrop such that it will close the modal when clicked outside
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          {/* props.title */}
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>
          {/* props.message */}
          {props.children}
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.eventHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal;