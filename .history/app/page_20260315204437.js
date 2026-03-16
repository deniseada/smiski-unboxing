import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.stage}>
        <Image
          src="/images/landing-page/smiski-head.png"
          alt=""
          width={1133}
          height={818}
          priority
          className={styles.smiskiHead}
        />
        <Image
          src="/images/landing-page/spotlight.png"
          alt=""
          width={836}
          height={767}
          priority
          className={styles.spotlight}
        />

        <header className={styles.topBar}>
          <Image
            src="/images/landing-page/logo.png"
            alt="Smiski logo"
            width={298}
            height={74}
            priority
            className={styles.logo}
          />
          <button
            className={styles.audioButton}
            type="button"
            aria-label="Toggle sound"
          >
            <Image
              src="/images/landing-page/audio.png"
              alt=""
              width={116}
              height={116}
              priority
            />
          </button>
        </header>

        <section className={styles.content}>
          <Image
            src="/images/landing-page/smiski.png"
            alt="SMISKI"
            width={645}
            height={118}
            priority
            className={styles.smiskiWord}
          />
          <Image
            src="/images/landing-page/unboxing.png"
            alt="UNBOXING"
            width={658}
            height={172}
            priority
            className={styles.unboxingWord}
          />
          <button
            className={styles.startButton}
            type="button"
            aria-label="Start"
          >
            <Image
              src="/images/landing-page/button.png"
              alt="Start"
              width={501}
              height={137}
              priority
            />
          </button>
          <Image
            src="/images/landing-page/shadow.png"
            alt=""
            width={371}
            height={40}
            priority
            className={styles.buttonShadow}
          />
        </section>

        <div className={styles.sideDots} aria-hidden>
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>

        <Image
          src="/images/landing-page/yoga-smiski.png"
          alt="Smiski yoga character"
          width={274}
          height={262}
          priority
          className={styles.yoga}
        />
        <Image
          src="/images/landing-page/cheer-smiski.png"
          alt="Smiski cheering character"
          width={250}
          height={348}
          priority
          className={styles.cheer}
        />
        <Image
          src="/images/landing-page/book-carrying.png"
          alt="Smiski carrying a box"
          width={256}
          height={196}
          priority
          className={styles.book}
        />
        <Image
          src="/images/landing-page/ground.png"
          alt=""
          width={1272}
          height={145}
          priority
          className={styles.ground}
        />
      </main>
    </div>
  );
}
