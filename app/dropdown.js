import styles from "./page.module.css";

function League({ name }) {
  return (
    <li key={"k6d" + name} className={styles.league}>
      <a href="#">{name}</a>
    </li>
  );
}

export default function DropdownWrapper() {
  return (
    <div className={styles["dropdown-wrapper"]}>
      <button className={styles["dropdown-button"]}>
        Top Events
        <svg
          className={styles["dropdown-toggle"]}
          xmlns="http://www.w3.org/2000/svg"
          width={8}
          height={8}
          viewBox="-45 0 175 50"
        >
          <polyline points="-25 -20 45 55 114 -20" />
        </svg>
      </button>
      <ul className={styles["dropdown-menu"]}>
        <League name="Top Events" />
        <League name="MLB" />
        <League name="WNBA" />
        <League name="PGA Tour" />
        <League name="LPGA Tour" />
        <League name="Top Soccer" />
        <League name="NBA Summer League" />
        <League name="Tennis (W)" />
        <League name="Tennis (M)" />
        <League name="UFC" />
        <League name="F1" />
        <League name="NASCAR" />
        <League name="NFL" />
        <League name="NCAAF" />
        <League name="NCAAM" />
        <League name="NCAAW" />
        <League name="PLL (Lacrosse)" />
        <League name="NBA" />
        <League name="NHL" />
      </ul>
    </div>
  );
}
