import JobSeekerNavbar from "../../components/JobSeekerNavbar";
import styles from "../../styles/Profile.module.css";

export default function JobSeekerProfile() {
  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>Job Seeker Profile Page</h1>
        <p>This is the job seeker profile page</p>

        <div className={styles.profileForm}>
          <h2>Personal Information</h2>
          <p>
            <strong>Mock Database Connection:</strong> This will read from
            job_seekers table
          </p>

          <div className={styles.formGroup}>
            <label>Full Name:</label>
            <input type="text" defaultValue="John Doe" />
          </div>

          <div className={styles.formGroup}>
            <label>Email:</label>
            <input type="email" defaultValue="john.doe@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input type="tel" defaultValue="(555) 123-4567" />
          </div>

          <div className={styles.formGroup}>
            <label>Experience Level:</label>
            <select defaultValue="mid">
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>

          <button className={styles.saveBtn}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
