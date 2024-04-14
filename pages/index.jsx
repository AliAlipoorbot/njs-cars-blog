import Link from "next/link";
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/cars">
        <button>See All Cars</button>
      </Link>
    </div>
  );
}
