import styles from './ProjectsStyles.module.css';
import plngrt from '../../assets/plngrt.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={plngrt}
          link="https://plngrt-web.vercel.app/"
          h3="Pusat Laptop Nusantara Garut"
          p="Company Landing Page"
        />
      </div>
    </section>
  );
}

export default Projects;
