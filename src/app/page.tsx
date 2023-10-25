"use client";

import style from "./page.module.css";
import { Card, Button } from "react-bootstrap";
import Header from "@/components/header/header";

type homeProps = {
  onClick: () => void;
};

export default function Home(props: homeProps): JSX.Element {
  return (
    <div className={style.homeContainer}>
      <Header />
      <Card className={style.cardContainer}>
        <Card.Body>
          <Card.Title>Let&rsquo;s get started!</Card.Title>
          <Button className={style.goButton} onClick={props.onClick}>
            Go!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
