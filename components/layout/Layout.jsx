import Link from "next/link";
import styles from "./Layout.module.css";

import Image from "next/image";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Cars</h2>
        </Link>
        <Link href="/">
          <Image src="/favicon.ico" width={30} height={30} alt="icon"/>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>Cars blog 2024 • All rights reserved</p>
      </footer>
    </>
  );
}

export default Layout;
