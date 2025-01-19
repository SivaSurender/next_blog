import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/site/image/pic.jpg"
          alt="profile image"
          width={300}
          height={300}
        />{" "}
      </div>
      <h1>Hi, I'm Bala</h1>
      <p>
        I try to blog about web development especially js frameworks like React
        or Next
      </p>
    </section>
  );
}
