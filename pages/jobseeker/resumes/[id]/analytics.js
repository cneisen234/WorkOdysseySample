import { useRouter } from "next/router";
import JobSeekerNavbar from "@/components/JobSeekerNavbar";
import styles from "../../../../styles/ResumeAnalytics.module.css";

export default function ResumeAnalytics() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>Resume Analytics</h1>
        <p>
          This is the resume analytics page for resume ID: {id} (mirrors
          employer job rubric)
        </p>
        <p>
          <strong>Mock Database Connection:</strong> SELECT * FROM
          resume_analytics WHERE resume_id = {id}
        </p>

        <div className={styles.analyticsGrid}>
          <div className={styles.analyticsCard}>
            <h3>Total Applications</h3>
            <p className={styles.statNumber}>5</p>
          </div>

          <div className={styles.analyticsCard}>
            <h3>Response Rate</h3>
            <p className={styles.statNumber}>60%</p>
          </div>

          <div className={styles.analyticsCard}>
            <h3>Interview Invites</h3>
            <p className={styles.statNumber}>3</p>
          </div>

          <div className={styles.analyticsCard}>
            <h3>Average Match Score</h3>
            <p className={styles.statNumber}>85%</p>
          </div>
        </div>

        <div className={styles.improvementSuggestions}>
          <h2>AI-Powered Improvement Suggestions</h2>

          <div className={styles.suggestionCard}>
            <h4>Keywords Optimization</h4>
            <p>
              Consider adding these trending keywords to improve match rates:
              "cloud computing", "microservices", "CI/CD"
            </p>
          </div>

          <div className={styles.suggestionCard}>
            <h4>Skills Section</h4>
            <p>
              Your skills section could be more comprehensive. Consider adding
              specific frameworks and tools.
            </p>
          </div>

          <div className={styles.suggestionCard}>
            <h4>Quantified Achievements</h4>
            <p>
              Add more metrics to your experience descriptions. Examples:
              "Increased performance by 40%", "Led team of 5 developers"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
