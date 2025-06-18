import JobSeekerNavbar from "../../components/JobSeekerNavbar";
import ChatBot from "../../components/ChatBot";
import styles from "../../styles/Dashboard.module.css";

export default function JobSeekerDashboard() {
  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>Job Seeker Dashboard</h1>
        <p>This is the job seeker home page</p>

        <div className={styles.dashboardGrid}>
          <div className={styles.statsCard}>
            <h3>Applications Sent</h3>
            <p className={styles.statNumber}>12</p>
          </div>
          <div className={styles.statsCard}>
            <h3>Interview Invites</h3>
            <p className={styles.statNumber}>3</p>
          </div>
          <div className={styles.statsCard}>
            <h3>Profile Views</h3>
            <p className={styles.statNumber}>47</p>
          </div>
        </div>

        <ChatBot userType="jobseeker" />
      </div>
    </div>
  );
}
