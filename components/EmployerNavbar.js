import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

export default function EmployerNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("userId");
    router.push("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <Link href="/employer/dashboard">JobPortal - Employer</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/employer/dashboard">Home</Link>
        <Link href="/employer/profile">Profile</Link>
        <Link href="/employer/jobs">Jobs</Link>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}
