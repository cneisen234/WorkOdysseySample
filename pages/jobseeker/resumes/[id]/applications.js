import { useRouter } from "next/router";
import JobSeekerNavbar from "@/components/JobSeekerNavbar";
import { mockApplications } from "@/lib/mockData";
import styles from "../../../../styles/Applicants.module.css";

export default function ResumeApplications() {
  const router = useRouter();
  const { id } = router.query;

  // Mock applications for this resume - would come from database
  const resumeApplications = mockApplications.filter(
    (app) => app.resumeUsed === "Software Engineer Resume" // Mock filter
  );

  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>Applications Sent with This Resume</h1>
        <p>
          This is the resume applications page for resume ID: {id} (mirrors
          employer applicants view)
        </p>
        <p>
          <strong>Mock Database Connection:</strong> SELECT * FROM applications
          JOIN jobs WHERE resume_id = {id} ORDER BY applied_date DESC
        </p>

        <div className={styles.applicantsList}>
          {resumeApplications.map((application, index) => (
            <div key={application.id} className={styles.applicationCard}>
              <div className={styles.applicationInfo}>
                <h3>{application.jobTitle}</h3>
                <p>
                  <strong>Company:</strong> {application.company}
                </p>
                <p>
                  <strong>Applied Date:</strong> {application.appliedDate}
                </p>
                <p>
                  <strong>Status:</strong> {application.status}
                </p>
              </div>
              <div className={styles.actions}>
                <button className={styles.actionBtn}>View Job Details</button>
                <button className={styles.actionBtn}>Check Status</button>
                <button className={styles.actionBtn}>
                  Withdraw Application
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
