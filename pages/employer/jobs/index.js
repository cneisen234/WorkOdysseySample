import Link from "next/link";
import EmployerNavbar from "@/components/EmployerNavbar";
import { mockJobs } from "@/lib/mockData";
import styles from "../../../styles/Jobs.module.css";

export default function EmployerJobs() {
  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Jobs Management</h1>
        <p>This is the employer jobs page</p>
        <p>
          <strong>Mock Database Connection:</strong> This will read from jobs
          table WHERE employer_id = current_user_id
        </p>

        <button className={styles.createBtn}>+ Create New Job</button>

        <div className={styles.jobsList}>
          {mockJobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <h3>{job.title}</h3>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Type:</strong> {job.type}
              </p>
              <p>
                <strong>Applications:</strong> {job.applicantCount}
              </p>
              <p>
                <strong>Posted:</strong> {job.postedDate}
              </p>

              <div className={styles.jobActions}>
                <Link
                  href={`/employer/jobs/${job.id}`}
                  className={styles.actionBtn}>
                  View Details
                </Link>
                <Link
                  href={`/employer/jobs/${job.id}/edit`}
                  className={styles.actionBtn}>
                  Edit
                </Link>
                <Link
                  href={`/employer/jobs/${job.id}/applicants`}
                  className={styles.actionBtn}>
                  View Applicants
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
