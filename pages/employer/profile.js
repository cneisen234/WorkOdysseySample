import EmployerNavbar from "../../components/EmployerNavbar";
import styles from "../../styles/Profile.module.css";

export default function EmployerProfile() {
  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Employer Profile Page</h1>
        <p>This is the employer profile page</p>

        <div className={styles.profileForm}>
          <h2>Company Information</h2>
          <p>
            <strong>Mock Database Connection:</strong> This will read from
            employers table
          </p>

          <div className={styles.formGroup}>
            <label>Company Name:</label>
            <input type="text" defaultValue="Mock Company Inc." />
          </div>

          <div className={styles.formGroup}>
            <label>Industry:</label>
            <input type="text" defaultValue="Technology" />
          </div>

          <div className={styles.formGroup}>
            <label>Company Size:</label>
            <select defaultValue="50-100">
              <option>1-10</option>
              <option>11-50</option>
              <option>50-100</option>
              <option>100+</option>
            </select>
          </div>

          <button className={styles.saveBtn}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
