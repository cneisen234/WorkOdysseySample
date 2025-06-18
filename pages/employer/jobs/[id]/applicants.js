import { useRouter } from "next/router";
import EmployerNavbar from "@/components/EmployerNavbar";
import styles from "../../../../styles/Applicants.module.css";

export default function JobApplicants() {
  const router = useRouter();
  const { id } = router.query;

  // Mock applicant data - would come from database
  const mockApplicants = [
    { id: 1, name: "Alice Johnson", score: 95, status: "Interview Scheduled" },
    { id: 2, name: "Bob Smith", score: 88, status: "Under Review" },
    { id: 3, name: "Carol Davis", score: 82, status: "Applied" },
    { id: 4, name: "David Wilson", score: 79, status: "Applied" },
  ];

  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Applicants (Stack Ranked)</h1>
        <p>This is the applicants page for job ID: {id}</p>
        <p>
          <strong>Mock Database Connection:</strong> SELECT * FROM applications
          JOIN job_seekers WHERE job_id = {id} ORDER BY score DESC
        </p>

        <div className={styles.applicantsList}>
          {mockApplicants.map((applicant, index) => (
            <div key={applicant.id} className={styles.applicantCard}>
              <div className={styles.rank}>#{index + 1}</div>
              <div className={styles.applicantInfo}>
                <h3>{applicant.name}</h3>
                <p>
                  <strong>Score:</strong> {applicant.score}/100
                </p>
                <p>
                  <strong>Status:</strong> {applicant.status}
                </p>
              </div>
              <div className={styles.actions}>
                <button className={styles.actionBtn}>View Resume</button>
                <button className={styles.actionBtn}>Schedule Interview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
