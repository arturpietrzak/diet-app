import styles from "./backdrop.module.scss"

type BackdropProps = {
  onClick: () => void
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return <div onClick={onClick} className={styles.backdrop} />
}

export default Backdrop
