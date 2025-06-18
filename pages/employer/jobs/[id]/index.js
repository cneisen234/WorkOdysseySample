import { useRouter } from "next/router";
import Link from "next/link";
import EmployerNavbar from "@/components/EmployerNavbar";
import { mockJobs } from "@/lib/mockData";
import styles from "../../../../styles/JobDetail.module.css";

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;

  // In production: SELECT * FROM jobs WHERE id = $1 AND employer_id = $2
  const job = mockJobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <EmployerNavbar />
      <div className={styles.container}>
        <h1>Job Description Page</h1>
        <p>This is a job description page for job ID: {id}</p>

        <div className={styles.jobDetail}>
          <h2>{job.title}</h2>
          <p>
            <strong>Company:</strong> {job.company}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Type:</strong> {job.type}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>Applications:</strong> {job.applicantCount}
          </p>

          <h3>Description</h3>
          <p>{job.description}</p>

          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <Link href={`/employer/jobs/${id}/edit`} className={styles.actionBtn}>
            Edit Job Description
          </Link>
          <Link
            href={`/employer/jobs/${id}/applicants`}
            className={styles.actionBtn}>
            View Applicants (Stack Ranked)
          </Link>
          <Link
            href={`/employer/jobs/${id}/rubric`}
            className={styles.actionBtn}>
            View/Edit Rubric
          </Link>
        </div>

        <p>
          <Link href="/employer/jobs">← Back to Jobs</Link>
        </p>
      </div>
    </div>
  );
}
