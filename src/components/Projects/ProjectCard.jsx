import './ProjectCard.css';
import info from './Project_info';

export default function ProjectCard({ id }) {
    const { title, description, image: card_image } = info[id] || {};

    return (
        <div className="card">
            <div className="image-container">
                <img src={card_image} alt={title} className="project-image" />
            </div>
            <div className="header-container">
                <h2 className="header-style">{title}</h2>
            </div>
            <div className="card-description-container">
                <p className="description-style">{description}</p>
            </div>
        </div>
    );
}
