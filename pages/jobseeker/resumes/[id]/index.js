import { useRouter } from "next/router";
import Link from "next/link";
import JobSeekerNavbar from "@/components/JobSeekerNavbar";
import { mockResumes } from "@/lib/mockData";
import styles from "../../../../styles/ResumeDetail.module.css";

export default function ResumeDetail() {
  const router = useRouter();
  const { id } = router.query;

  // In production: SELECT * FROM resumes WHERE id = $1 AND job_seeker_id = $2
  const resume = mockResumes.find((r) => r.id === parseInt(id));

  if (!resume) {
    return <div>Resume not found</div>;
  }

  return (
    <div>
      <JobSeekerNavbar />
      <div className={styles.container}>
        <h1>Resume Detail Page</h1>
        <p>
          This is the resume detail page for resume ID: {id} (mirrors employer
          job description)
        </p>

        <div className={styles.resumeDetail}>
          <h2>{resume.title}</h2>
          <p>
            <strong>Last Updated:</strong> {resume.lastUpdated}
          </p>
          <p>
            <strong>Status:</strong> {resume.status}
          </p>
          <p>
            <strong>Applications Sent:</strong> {resume.applications}
          </p>

          <h3>Resume Content Preview</h3>
          <div className={styles.resumePreview}>
            <p>
              <strong>Professional Summary:</strong> Experienced software
              engineer with 5+ years...
            </p>
            <p>
              <strong>Skills:</strong> JavaScript, React, Node.js, PostgreSQL...
            </p>
            <p>
              <strong>Experience:</strong> Senior Software Engineer at Tech
              Corp...
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link
            href={`/jobseeker/resumes/${id}/edit`}
            className={styles.actionBtn}>
            Edit Resume
          </Link>
          <Link
            href={`/jobseeker/resumes/${id}/applications`}
            className={styles.actionBtn}>
            View Applications Sent
          </Link>
          <Link
            href={`/jobseeker/resumes/${id}/analytics`}
            className={styles.actionBtn}>
            Resume Analytics
          </Link>
        </div>

        <p>
          <Link href="/jobseeker/resumes">← Back to Resumes</Link>
        </p>
      </div>
    </div>
  );
}
