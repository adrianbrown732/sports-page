import styles from "./page.module.css";
import DropdownWrapper from "./dropdown";

export default function Home() {
  return (
    <main>
      <DropdownWrapper />
      <header>
        <h1 className={styles.header}>sports page</h1>
      </header>
    </main>
  );
}
