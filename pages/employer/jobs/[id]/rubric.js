import { useRouter } from "next/router";
import EmployerNavbar from "../../../../components/EmployerNavbar";
import styles from "../../../../styles/Rubric.module.css";

export default function JobRubric() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Rubric Page</h1>
        <p>This is a rubric page for job ID: {id}</p>
        <p>
          <strong>Mock Database Connection:</strong> SELECT * FROM rubrics WHERE
          job_id = {id}
        </p>

        <div className={styles.rubricForm}>
          <h2>Evaluation Criteria</h2>

          <div className={styles.criteriaList}>
            <div className={styles.criterion}>
              <label>Technical Skills (Weight: 40%)</label>
              <textarea placeholder="Describe technical requirements and how to evaluate them..."></textarea>
            </div>

            <div className={styles.criterion}>
              <label>Experience (Weight: 30%)</label>
              <textarea placeholder="Years of experience, relevant projects..."></textarea>
            </div>

            <div className={styles.criterion}>
              <label>Communication (Weight: 20%)</label>
              <textarea placeholder="How to evaluate communication skills..."></textarea>
            </div>

            <div className={styles.criterion}>
              <label>Culture Fit (Weight: 10%)</label>
              <textarea placeholder="Company values alignment..."></textarea>
            </div>
          </div>

          <button className={styles.saveBtn}>Save Rubric</button>
        </div>
      </div>
    </div>
  );
}
