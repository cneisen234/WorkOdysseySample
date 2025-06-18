import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

export default function JobSeekerNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("userId");
    router.push("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <Link href="/jobseeker/dashboard">JobPortal - Job Seeker</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/jobseeker/dashboard">Home</Link>
        <Link href="/jobseeker/profile">Profile</Link>
        <Link href="/jobseeker/resumes">Resumes</Link>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}
