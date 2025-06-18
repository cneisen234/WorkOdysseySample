import { useRouter } from "next/router";
import JobSeekerNavbar from "@/components/JobSeekerNavbar";
import styles from "../../../../styles/EditResume.module.css";

export default function EditResume() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>Edit Resume</h1>
        <p>
          This is the edit resume page for resume ID: {id} (mirrors employer
          edit job)
        </p>
        <p>
          <strong>Mock Database Connection:</strong> UPDATE resumes SET ...
          WHERE id = {id}
        </p>

        <form className={styles.editForm}>
          <div className={styles.formGroup}>
            <label>Skills:</label>
            <textarea
              rows="3"
              defaultValue="JavaScript, React, Node.js, PostgreSQL..."></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Experience:</label>
            <textarea
              rows="8"
              defaultValue="Senior Software Engineer at Tech Corp (2021-Present)..."></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Education:</label>
            <textarea
              rows="4"
              defaultValue="Bachelor of Science in Computer Science..."></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Certifications:</label>
            <textarea
              rows="3"
              defaultValue="AWS Certified Developer..."></textarea>
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
