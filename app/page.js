import Image from "next/image";
import Link from "next/link";
import { Baloo_2 } from "next/font/google";
import styles from "./page.module.css";
import VariableProximity from "./components/VariableProximity";

const displayFont = Baloo_2({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.stage}>
        <div className={styles.frame}>
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

          <Image
            src="/images/landing-page/logo.png"
            alt="Smiski logo"
            width={298}
            height={74}
            priority
            className={styles.logo}
          />
          <Image
            src="/images/landing-page/audio.png"
            alt="Audio"
            width={116}
            height={116}
            priority
            className={styles.audio}
          />

          <h1 className={`${styles.smiskiWord} ${displayFont.className}`}>
            <VariableProximity
              label="SMISKI"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 900"
              radius={180}
              falloff="gaussian"
            />
          </h1>
          <h2 className={`${styles.unboxingWord} ${displayFont.className}`}>
            <VariableProximity
              label="UNBOXING"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 900"
              radius={180}
              falloff="gaussian"
            />
          </h2>

          <Link
            href="/unboxing"
            className={styles.startButton}
            aria-label="Start"
          >
            <Image
              src="/images/landing-page/button.png"
              alt="Start"
              width={378}
              height={115}
              priority
            />
          </Link>

          <Image
            src="/images/landing-page/yoga-smiski.png"
            alt="Smiski yoga"
            width={274}
            height={262}
            priority
            className={styles.yoga}
          />
          <Image
            src="/images/landing-page/cheer-smiski.png"
            alt="Smiski cheer"
            width={250}
            height={348}
            priority
            className={styles.cheer}
          />
          <Image
            src="/images/landing-page/book-carrying.png"
            alt="Smiski book carrying"
            width={218}
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
        </div>
      </main>
    </div>
  );
}
