import Image from "next/image";
import styles from "./page.module.css";

const layers = [
  {
    src: "/images/landing-page/smiski-head.png",
    alt: "",
    width: 1133,
    height: 818,
    className: styles.smiskiHead,
  },
  {
    src: "/images/landing-page/spotlight.png",
    alt: "",
    width: 836,
    height: 767,
    className: styles.spotlight,
  },
  {
    src: "/images/landing-page/logo.png",
    alt: "Smiski logo",
    width: 298,
    height: 74,
    className: styles.logo,
  },
  {
    src: "/images/landing-page/audio.png",
    alt: "Audio",
    width: 116,
    height: 116,
    className: styles.audio,
  },
  {
    src: "/images/landing-page/smiski.png",
    alt: "SMISKI",
    width: 645,
    height: 118,
    className: styles.smiskiWord,
  },
  {
    src: "/images/landing-page/unboxing.png",
    alt: "UNBOXING",
    width: 658,
    height: 172,
    className: styles.unboxingWord,
  },
  {
    src: "/images/landing-page/yoga-smiski.png",
    alt: "Smiski yoga",
    width: 274,
    height: 262,
    className: styles.yoga,
  },
  {
    src: "/images/landing-page/cheer-smiski.png",
    alt: "Smiski cheer",
    width: 250,
    height: 348,
    className: styles.cheer,
  },
  {
    src: "/images/landing-page/book-carrying.png",
    alt: "Smiski book carrying",
    width: 218,
    height: 196,
    className: styles.book,
  },
  {
    src: "/images/landing-page/ground.png",
    alt: "",
    width: 1272,
    height: 145,
    className: styles.ground,
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.stage}>
        <div className={styles.frame}>
          {layers.slice(0, 6).map((layer) => (
            <Image
              key={layer.src}
              src={layer.src}
              alt={layer.alt}
              width={layer.width}
              height={layer.height}
              priority
              className={layer.className}
            />
          ))}

          <button
            className={styles.startButton}
            type="button"
            aria-label="Start"
          >
            <Image
              src="/images/landing-page/button.png"
              alt="Start"
              width={378}
              height={115}
              priority
            />
          </button>

          {layers.slice(6).map((layer) => (
            <Image
              key={layer.src}
              src={layer.src}
              alt={layer.alt}
              width={layer.width}
              height={layer.height}
              priority
              className={layer.className}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
