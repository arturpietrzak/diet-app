import Form from "../Form";
import styles from "./PlanForm.module.scss";

type PlanFormProps = {
  closeForm: () => void;
  planType: "basic" | "premium";
};

const PlanForm = ({ closeForm, planType }: PlanFormProps) => {
  return (
    <Form closeForm={closeForm}>
      <form action="/api/form" method="post" className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" name="first" required />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required />
        </div>
        <div className={styles.fieldGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Form>
  );
};

export default PlanForm;
