import style from "./header.module.css";
import headerImage from "../../assets/hiAugust.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <Image src={headerImage} className={style.headerImage} alt="hero image" />
    </div>
  );
}
