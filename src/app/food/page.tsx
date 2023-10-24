import style from "./food.module.css";

export default function Food() {
  return (
    <div className={style.foodContainer}>
      <header className={style.header}>
        <h3>This is the food page</h3>
      </header>
    </div>
  );
}
