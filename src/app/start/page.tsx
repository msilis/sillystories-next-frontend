import React from "react";
import style from "./start.module.css";
import { Card, Button } from "react-bootstrap";

type startProps = {
  onClick: () => void;
};

export default function Start(props: startProps): JSX.Element {
  return (
    <Card className={style.cardContainer}>
      <Card.Body>
        <Card.Title>Let&rsquo;s get started!</Card.Title>
        <Button className={style.button} onClick={props.onClick}>
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
