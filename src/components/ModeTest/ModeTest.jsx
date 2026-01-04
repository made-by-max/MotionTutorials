"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styles from "./ModeTest.module.css";

const waterDog =
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const corgi =
  "https://images.unsplash.com/photo-1763718170991-baa67106743b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function ModeTest() {
  const [state, setState] = React.useState(true);

  function handleSwitch() {
    setState(!state);
  }

  const imageSrc = state ? waterDog : corgi;

  return (
    <>
      <div className={styles.gridWrapper}>
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>{" "}
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>{" "}
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>{" "}
        <AnimatePresence mode="sync">
          <motion.div
            className={styles.imageWrapper}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img src={imageSrc} />

            <p className={styles.caption}>Doggo on the beach</p>
          </motion.div>
        </AnimatePresence>
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>{" "}
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>{" "}
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>{" "}
        <div className={styles.imageWrapper}>
          <img src={corgi} />
          <p className={styles.caption}>Corgi in a bowtie</p>
        </div>
      </div>

      <button onClick={handleSwitch}>Switch</button>
    </>
  );
}

export default ModeTest;
