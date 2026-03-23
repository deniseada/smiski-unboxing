"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Baloo_2 } from "next/font/google";
import SidebarToggleButton from "./components/SidebarToggleButton";
import styles from "./page.module.css";

const displayFont = Baloo_2({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const SERIES_OPTIONS = ["HIPPERS", "DRESSING", "YOGA", "LIVING", "SERIES 1"];

const CENTER_BOXES = [
  {
    id: "box-1",
    top: "77%",
    left: "27%",
    size: "19%",
    zIndex: 6,
  },
  {
    id: "box-2",
    top: "77%",
    left: "40%",
    size: "19%",
    zIndex: 6,
  },
  {
    id: "box-3",
    top: "77%",
    left: "53%",
    size: "19%",
    zIndex: 6,
  },
  {
    id: "box-4",
    top: "77%",
    left: "66%",
    size: "19%",
    zIndex: 6,
  },
  {
    id: "box-5",
    top: "69%",
    left: "33%",
    size: "17%",
    zIndex: 5,
  },
  {
    id: "box-6",
    top: "69%",
    left: "46%",
    size: "17%",
    zIndex: 5,
  },
  {
    id: "box-7",
    top: "69%",
    left: "59%",
    size: "17%",
    zIndex: 4,
  },
  {
    id: "box-8",
    top: "63%",
    left: "39%",
    size: "15%",
    zIndex: 4,
  },
  {
    id: "box-9",
    top: "63%",
    left: "51%",
    size: "15%",
    zIndex: 3,
  },
  {
    id: "box-10",
    top: "58%",
    left: "45%",
    size: "13%",
    zIndex: 3,
  },
];

const POSSIBLE_PICKS = [
  "/images/dressing-series/dressing1.png",
  "/images/dressing-series/dressing2.png",
  "/images/dressing-series/dressing3.png",
  "/images/dressing-series/dressing4.png",
  "/images/dressing-series/dressing5.png",
  "/images/dressing-series/dressing6.png",
];

export default function UnboxingPage() {
  const [activeSeries, setActiveSeries] = useState("DRESSING");
  const [activeBoxId, setActiveBoxId] = useState(CENTER_BOXES[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={styles.page}>
      <main className={styles.layout}>
        <section className={styles.topBar}>
          <Link
            href="/"
            className={styles.roundButton}
            aria-label="Back to home"
          >
            ⌂
          </Link>

          <Image
            src="/images/landing-page/logo.png"
            alt="Smiski logo"
            width={298}
            height={74}
            className={styles.logo}
            priority
          />

          <button
            type="button"
            className={styles.roundButton}
            aria-label="Music"
          >
            <Image
              src="/images/landing-page/audio.png"
              alt="Audio"
              width={116}
              height={116}
              priority
              className={styles.audioIcon}
            />
          </button>
        </section>

        <section className={styles.playArea}>
          <aside
            className={`${styles.sidebar} ${
              isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
            }`}
          >
            <SidebarToggleButton
              isOpen={isSidebarOpen}
              onClick={() => setIsSidebarOpen((value) => !value)}
              className={styles.sidebarToggle}
            />

            <div className={styles.sidebarBody}>
              <p className={`${styles.sidebarTitle} ${displayFont.className}`}>
                SERIES
              </p>
              <div className={styles.seriesList}>
                {SERIES_OPTIONS.map((seriesName) => (
                  <button
                    key={seriesName}
                    type="button"
                    className={`${styles.seriesButton} ${
                      activeSeries === seriesName
                        ? styles.seriesButtonActive
                        : ""
                    } ${displayFont.className}`}
                    onClick={() => setActiveSeries(seriesName)}
                  >
                    {seriesName}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.mainColumn}>
            <h1 className={`${styles.title} ${displayFont.className}`}>
              SMISKI BLINDBOX
            </h1>

            <div className={styles.centerStage}>
              <Image
                src="/images/moving-series/Remove tool edits.png"
                alt="Smiski blind box display tray"
                width={700}
                height={700}
                priority
                className={styles.mainBox}
              />

              {CENTER_BOXES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.stackBox} ${
                    activeBoxId === item.id ? styles.hotspotActive : ""
                  }`}
                  style={{
                    top: item.top,
                    left: item.left,
                    width: item.size,
                    zIndex: item.zIndex,
                  }}
                  onClick={() => setActiveBoxId(item.id)}
                  aria-label={`Open blind box ${index + 1}`}
                >
                  <Image
                    src="/images/dressing-series/dressing-series.png"
                    alt=""
                    width={260}
                    height={500}
                    className={styles.stackBoxImage}
                  />
                </button>
              ))}
            </div>

            <div className={styles.boxGrid}>
              {POSSIBLE_PICKS.map((image, index) => (
                <div key={`pick-${index + 1}`} className={styles.boxCard}>
                  <Image
                    src={image}
                    alt={`Smiski result ${index + 1}`}
                    width={180}
                    height={180}
                    className={styles.boxImage}
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.infoColumn}>
            <div className={styles.instructionsCard}>
              <Image
                src="/images/dressing-series/shirt-on.png"
                alt="Smiski shirt-on"
                width={250}
                height={207}
                className={styles.instructionsMascot}
              />

              <h2 className={`${styles.cardTitle} ${displayFont.className}`}>
                INSTRUCTIONS:
              </h2>
              <ul className={styles.instructionsList}>
                <li>Choose a series to open.</li>
                <li>Pick a box from the center stack.</li>
                <li>Bottom items show all possible pulls.</li>
              </ul>
              <p className={styles.noteText}>
                Each blind box has a 1/12 chance of containing a specific
                figure. Duplicates may appear.
              </p>
            </div>

            <div className={styles.secretCard}>
              <p className={`${styles.secretTitle} ${displayFont.className}`}>
                SECRET
              </p>
              <Image
                src="/images/dressing-series/secret.png"
                alt="Secret Smiski"
                width={220}
                height={260}
                className={styles.secretImage}
              />
              <p className={styles.secretOdds}>1 / 144</p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
