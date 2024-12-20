import './Projects.css';
import ProjectCard from './ProjectCard';

export default function Project({ isDarkMode, reference }) {
    return (
        <section ref={reference} className='cards-container'>
            <div className='intro-card'>
                <h1 className='projects_title'>Projects I’ve done over the past 5 years</h1>
            </div>
            <ProjectCard id={0}/>
            <ProjectCard id={1}/>
            <ProjectCard id={2}/>
            <ProjectCard id={3}/>
            <div className='end-card'>
                <h1 className='projects_end_title'>And more....</h1>
            </div>
        </section>
    );
}
