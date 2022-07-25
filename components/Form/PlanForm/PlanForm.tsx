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
          <label htmlFor="first" className={styles.required}>
            First Name
          </label>
          <input type="text" id="first" name="first" required />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="last" className={styles.required}>
            Last Name
          </label>
          <input type="text" id="last" name="last" required />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.required}>
            E-mail
          </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="plan" className={styles.required}>
            Plan:
          </label>
          <select id="plan" name="plan" required>
            <option value="premium" selected={planType === "premium"}>
              Premium
            </option>
            <option value="basic" selected={planType === "basic"}>
              Basic
            </option>
          </select>
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="request">Additional requests:</label>
          <textarea
            rows={5}
            id="request"
            name="request"
            placeholder="Enter your requests here..."
          ></textarea>
        </div>
        <div className={styles.fieldGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Form>
  );
};

export default PlanForm;
