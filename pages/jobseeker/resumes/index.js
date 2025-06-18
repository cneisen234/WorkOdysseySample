import Link from "next/link";
import JobSeekerNavbar from "@/components/JobSeekerNavbar";
import { mockResumes } from "@/lib/mockData";
import styles from "../../../styles/Resumes.module.css";

export default function JobSeekerResumes() {
  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>My Resumes</h1>
        <p>
          This is the job seeker resumes page (mirrors employer jobs management)
        </p>
        <p>
          <strong>Mock Database Connection:</strong> SELECT * FROM resumes WHERE
          job_seeker_id = current_user_id
        </p>

        <button className={styles.createBtn}>+ Create New Resume</button>

        <div className={styles.resumesList}>
          {mockResumes.map((resume) => (
            <div key={resume.id} className={styles.resumeCard}>
              <h3>{resume.title}</h3>
              <p>
                <strong>Last Updated:</strong> {resume.lastUpdated}
              </p>
              <p>
                <strong>Status:</strong> {resume.status}
              </p>
              <p>
                <strong>Applications Sent:</strong> {resume.applications}
              </p>

              <div className={styles.resumeActions}>
                <Link
                  href={`/jobseeker/resumes/${resume.id}`}
                  className={styles.actionBtn}>
                  View Details
                </Link>
                <Link
                  href={`/jobseeker/resumes/${resume.id}/edit`}
                  className={styles.actionBtn}>
                  Edit
                </Link>
                <Link
                  href={`/jobseeker/resumes/${resume.id}/applications`}
                  className={styles.actionBtn}>
                  View Applications
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
