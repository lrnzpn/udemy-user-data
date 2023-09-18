import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <main className={styles.content}>
          {props.children}
        </main>
        <div className={styles.actions}>
          <Button type="button" onClick={props.eventHandler}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default ErrorModal;