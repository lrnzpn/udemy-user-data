import styles from './Button.module.css'

const Button = (props) => {
  const classes = `${styles.button} ${props.className ? props.className : ''}`

  return (
    /* better approach for the type, return type button as default
      type={props.type || 'button'}
    */
    <button className={classes} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;