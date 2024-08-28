import styles from "./ProjectsStyles.module.css";
import reduktor from "../../assets/reduktor.png";
import bmct from "../../assets/bmct.jpg";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={reduktor}
          link='https://reduktordev.org'
          h3='Reduktor'
          p='Company profile website'
        />
        <ProjectCard
          src={bmct}
          link='https://balimesaricyclingtours.com/'
          h3='Bali Mesari Cycling Tours'
          p='Company profile website'
        />
      </div>
    </section>
  );
};

export default Projects;
