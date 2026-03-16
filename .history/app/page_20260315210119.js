import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.stage}>
        <div className={styles.artboard}>
          <Image
            src="/images/landing-page/landing-page.png"
            alt="Smiski landing page"
            fill
            priority
            className={styles.backgroundImage}
          />

          <button className={styles.startButton} type="button" aria-label="Start">
            <Image
              src="/images/landing-page/button.png"
              alt="Start"
              width={378}
              height={115}
              priority
            />
          </button>
        </div>
      </main>
    </div>
  );
}
