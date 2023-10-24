"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { API_ROUTES } from "./config/api";

import { useState, useEffect } from "react";
import { clearStorage } from "./config/clearStorage";

export default function Home(): JSX.Element {
  const [storyState, setStoryState] = useState<string>("");
  const [editStory, setEditStory] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/") {
      clearStorage();
    }
  });
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h3>This is the home page</h3>
      </header>
      <nav className={styles.navigation}>
        <Link href={API_ROUTES.start}>Start</Link>
        <Link href={API_ROUTES.food}>Food</Link>
      </nav>
    </div>
  );
}
