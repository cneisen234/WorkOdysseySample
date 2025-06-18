import EmployerNavbar from "@/components/EmployerNavbar";
import ChatBot from "@/components/ChatBot";
import styles from "../../styles/Dashboard.module.css";

export default function EmployerDashboard() {
  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Employer Dashboard</h1>
        <p>This is the employer home page</p>

        <div className={styles.dashboardGrid}>
          <div className={styles.statsCard}>
            <h3>Active Jobs</h3>
            <p className={styles.statNumber}>5</p>
          </div>
          <div className={styles.statsCard}>
            <h3>Total Applications</h3>
            <p className={styles.statNumber}>23</p>
          </div>
          <div className={styles.statsCard}>
            <h3>Interviews Scheduled</h3>
            <p className={styles.statNumber}>8</p>
          </div>
        </div>

        <ChatBot userType="employer" />
      </div>
    </div>
  );
}
