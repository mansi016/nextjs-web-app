import styles from "./homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <div className={styles.homepageWrapper}>
        <h2>Welcome to homepage</h2>
        <div>This is the description.</div>
      </div>
    </>
  );
}
