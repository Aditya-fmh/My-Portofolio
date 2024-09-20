import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/photo.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagramLight from "../../assets/instagram-light.svg"
import instagramDark from "../../assets/instagram-dark.svg"
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Aditya
          <br />
          Firmanshah
        </h1>
        <h2>React Developer</h2>
        <span>
          <a href="https://instagram.com/dityafmh_mc" target="_blank">
            <img src={instagramIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Aditya-fmh" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-firmanshah-342591232" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          They say curiosity killed the cat, but I believe knowledge itself
          comes from our curiosity. So I am always eager to learn new things.
        </p>
        <a href="#">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
