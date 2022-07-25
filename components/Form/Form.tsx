import Backdrop from "../layouts/Backdrop/Backdrop";

import styles from "./Form.module.scss";

type FormProps = {
  children: React.ReactNode;
  closeForm: () => void;
};

const Form = ({ children, closeForm }: FormProps) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>{children}</div>
      <Backdrop onClick={closeForm} />
    </div>
  );
};

export default Form;
