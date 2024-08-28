import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/reshot-icon-instagram-M2ZK3USTWR-light.svg";
import instagramDark from "../../assets/reshot-icon-instagram-M2ZK3USTWR-dark.svg";
import githubLight from "../../assets/reshot-icon-github-NY46M9DGFU-light.svg";
import githubDark from "../../assets/reshot-icon-github-NY46M9DGFU-dark.svg";
import linkedinLight from "../../assets/reshot-icon-linkedin-G7YJ8FXBKT-light.svg";
import linkedinDark from "../../assets/reshot-icon-linkedin-G7YJ8FXBKT-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile img' />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Agus <br /> Wiradana
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='https://www.instagram.com/_wynaw_/' target='_blank'>
            <img src={instagramIcon} alt='Instagram Icon' />
          </a>
          <a href='https://github.com/yanguswiradana' target='_blank'>
            <img src={githubIcon} alt='Github Icon' />
          </a>
          <a>
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps.
        </p>
        {/* <a href={CV} download>
          <button className='hover'>Resume</button>
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
