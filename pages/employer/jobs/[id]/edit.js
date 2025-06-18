import { useRouter } from "next/router";
import EmployerNavbar from "../../../../components/EmployerNavbar";
import styles from "../../../../styles/EditJob.module.css";

export default function EditJob() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Edit Job Description</h1>
        <p>This is the edit job page for job ID: {id}</p>
        <p>
          <strong>Mock Database Connection:</strong> UPDATE jobs SET ... WHERE
          id = {id}
        </p>

        <form className={styles.editForm}>
          <div className={styles.formGroup}>
            <label>Job Title:</label>
            <input type="text" defaultValue="Senior Software Engineer" />
          </div>

          <div className={styles.formGroup}>
            <label>Location:</label>
            <input type="text" defaultValue="San Francisco, CA" />
          </div>

          <div className={styles.formGroup}>
            <label>Job Type:</label>
            <select defaultValue="full-time">
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Description:</label>
            <textarea
              rows="6"
              defaultValue="We are looking for a senior software engineer..."></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Salary Range:</label>
            <input type="text" defaultValue="$120,000 - $160,000" />
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
