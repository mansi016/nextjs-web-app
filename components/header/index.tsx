import Image from "next/image";
import Link from "next/link";
import ocxeeLogo from "/public/assets/images/ocxee-christamas.webp";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.headerWraper}>
        <div className={styles.logoWrapper}>
          <Image
            src={ocxeeLogo}
            alt="Ocxee Logo"
            className={styles.logoImageWrapper}
          />
        </div>
        <div className={styles.linkWrapper}>
          <Link href="/">Home</Link>
          <Link href="/student-accommodation">Accommodation</Link>
        </div>
      </div>
    </>
  );
}
