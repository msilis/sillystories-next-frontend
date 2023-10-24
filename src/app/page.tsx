import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h3>This is the home page</h3>
      </header>
    </div>
  );
}
