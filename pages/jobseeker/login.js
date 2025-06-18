import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Login.module.css";

export default function JobSeekerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Mock authentication - In production, this would connect to your PostgreSQL database
    // Example query: SELECT * FROM job_seekers WHERE email = $1 AND password_hash = $2
    console.log("Mock JobSeeker Login:", { email, password });

    // Simulate successful login
    if (email && password) {
      // In production: set JWT token, session, etc.
      localStorage.setItem("userType", "jobseeker");
      localStorage.setItem("userId", "mock-jobseeker-456");
      router.push("/jobseeker/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h1>Job Seeker Login</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
        <p>
          <Link href="/">← Back to Home</Link>
        </p>
        <p className={styles.mockNote}>
          <strong>Mock Implementation:</strong> This will connect to PostgreSQL
          job_seekers table
        </p>
      </div>
    </div>
  );
}
