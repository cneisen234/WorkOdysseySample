import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to JobPortal</h1>
        <p className={styles.description}>Choose your portal to get started</p>

        <div className={styles.grid}>
          <Link href="/employer/login" className={styles.card}>
            <h2>Employer Portal &rarr;</h2>
            <p>Post jobs, manage applications, and find talent</p>
          </Link>

          <Link href="/jobseeker/login" className={styles.card}>
            <h2>Job Seeker Portal &rarr;</h2>
            <p>Find jobs, manage applications, and build your profile</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
