import './JobTitle.css';
import job_skills from './Jobdetails';

export default function JobTitle({ isDarkMode, Job_id, colormode}) {
    const title = job_skills[Job_id].title;
    const desc = job_skills[Job_id].Description;
    const skills = job_skills[Job_id].skills;

    const isEven = Job_id % 2 === 0; // Check if Job_id is even

    return (
        <section className={`Job_contatiner ${colormode} ${isEven ? 'even' : 'odd'}`}>
            {isEven ? (
                
                <>
                    <div className='Job_overview'>
                        
                    <h1 className='Job_name'>
                        {Job_id === 0 ? (
                            <>
                                <span style={{ fontSize: '2rem', color: 'black' }}>
                                    I am your ...<br />
                                </span>
                                {title}
                            </>
                        ) : (
                            title
                        )}
                    </h1>


                        <div className={`Description ${colormode}`}>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className='skills_container'>
                        {skills.map((skill, index) => (
                            <div className='skill item' key={index}>
                                <div className='title_container'>
                                    <img src={skill.icon_path} alt={`${skill.skill_name} icon`} className="icon" />
                                    <h1>{skill.skill_name}</h1>
                                </div>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className='skills_container'>
                        {skills.map((skill, index) => (
                            <div className='skill item' key={index}>
                                <div className='title_container'>
                                    <img src={skill.icon_path} alt={`${skill.skill_name} icon`} className="icon" />
                                    <h1>{skill.skill_name}</h1>
                                </div>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='Job_overview odd'>
                        <h1 className='Job_name odd'>
                            {title}
                        </h1>
                        <div className={`Description ${colormode}`}>
                            <p>{desc}</p>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
