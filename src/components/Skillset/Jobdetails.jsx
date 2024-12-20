import tensorflowIcon from './icons/Tensorflow.png';
import pytorchIcon from './icons/Pytorch.png';
import kerasIcon from './icons/Keras.png';
import scikitIcon from './icons/scikit-learn.png';
import Pythonicon from './icons/Python.png'
import Ricon from './icons/R.png'
import SQLicon from './icons/SQL_Developer.png'
import DVicon from './icons/Ploty.png'
import HTMLicon from './icons/HTML5.png'
import JSicon from './icons/JavaScript.png'
import Reacticon from './icons/React.png'
import Nodejsicon from './icons/Nodejs.png'
import Giticon from './icons/Git.png'



const job_skills = {
    0 : {
        title: 'AI Engineer',
        Description: "AI is my core expertise, honed through years of academic research and hands-on experience. From my Bachelor's to my award-winning MSc project, I've focused on creating AI-driven solutions that solve real-world problems. My skills in TensorFlow, PyTorch, and Keras enable me to build, optimize, and deploy machine learning models that drive efficiency and innovation. If you're looking for someone to push the boundaries of AI, deliver impactful solutions, and elevate your projects, I’m the AI engineer you need.",
        skills: [
            {
                skill_name: 'TensorFlow',
                description: 'Experienced in building and deploying machine learning models using TensorFlow. I have applied it in projects involving image classification, NLP, and deep learning solutions.',
                icon_path: tensorflowIcon 
            },
            {
                skill_name: 'PyTorch',
                description: 'Proficient in PyTorch for developing dynamic deep learning models, particularly useful for research and experiments involving computer vision and reinforcement learning.',
                icon_path: pytorchIcon
            },
            {
                skill_name: 'Keras',
                description: 'Skilled in using Keras for rapid prototyping and building neural networks efficiently. It has been a key tool in various research and production projects.',
                icon_path: kerasIcon
            },
            {
                skill_name: 'Scikit-learn',
                description: 'Experienced with Scikit-learn for implementing classical machine learning algorithms, handling tasks such as feature engineering, model evaluation, and data preprocessing.',
                icon_path: scikitIcon
            }
        ]
    },
    1 : {
        title: 'Data Scientist',
        Description: 'As a Data Scientist, I specialize in turning raw data into powerful insights that drive decision-making. With expertise in machine learning, statistical analysis, and data visualization, I bring experience in working with large datasets and uncovering patterns that fuel business growth. Proficient in Python, R, SQL, and tools like Pandas, Scikit-learn, and Tableau, I deliver high-impact solutions that predict outcomes, identify opportunities, and solve complex challenges. My goal is to bridge the gap between data and business needs, ensuring every insight translates into real-world value.',
        skills: [
            {
                skill_name: 'Python',
                description: 'Proficient in Python for data analysis, visualization, and machine learning. I regularly use libraries like Pandas, Numpy, and Matplotlib to process and analyze data.',
                icon_path: Pythonicon
            },
            {
                skill_name: 'R',
                description: 'Experienced with R for statistical computing and data visualization. I use it to perform complex data analysis and create clear, insightful visualizations.',
                icon_path: Ricon
            },
            {
                skill_name: 'SQL',
                description: 'Skilled in SQL for querying, managing, and analyzing large datasets. I frequently use SQL to extract, filter, and manipulate data in relational databases.',
                icon_path: SQLicon
            },
            {
                skill_name: 'Data Visualization',
                description: 'Experienced in creating interactive and insightful data visualizations using tools like Tableau, Power BI, and Python libraries such as Seaborn and Plotly.',
                icon_path: DVicon
            }
        ]
    },
    2 : {
        title: 'Web Developer',
        Description: 'As a Web Developer, I craft seamless, interactive, and visually engaging web experiences. Proficient in HTML5, CSS3, JavaScript, and React, I specialize in building responsive, dynamic websites optimized for performance and user experience. With expertise in web standards, SEO, and cross-browser compatibility, I ensure flawless functionality across platforms. On the back end, I leverage Node.js to develop scalable APIs and manage databases for efficient web services. Whether designing sleek front-end interfaces or robust server-side logic, I deliver high-quality solutions tailored to both user and business needs.',
        skills: [
            {
                skill_name: 'HTML5/CSS3',
                description: 'Proficient in HTML5 and CSS3 for building responsive, accessible, and well-structured web pages, ensuring that web applications are both visually appealing and functional.',
                icon_path: HTMLicon
            },
            {
                skill_name: 'JavaScript',
                description: 'Experienced with JavaScript for creating interactive front-end features, ensuring dynamic user experiences and functionality across various platforms.',
                icon_path: JSicon
            },
            {
                skill_name: 'React',
                description: 'Skilled in using React to build modern, component-based web applications. I have experience in developing single-page applications (SPAs) with state management and reusable components.',
                icon_path: Reacticon
            },
            {
                skill_name: 'Node.js',
                description: 'Experienced in server-side programming with Node.js, building back-end services and APIs that communicate seamlessly with the front-end.',
                icon_path: Nodejsicon
            }
        ]
    },
    3 : {
        title: 'Full-stack Developer',
        Description: 'As a Full Stack Developer, I build comprehensive applications that seamlessly integrate both front-end and back-end systems. With expertise in JavaScript, React, Node.js, and SQL/NoSQL databases, I create scalable, efficient, and maintainable solutions. I design intuitive front-end interfaces while ensuring robust, secure back-end infrastructure capable of handling complex workflows. From real-time updates and secure authentication to data-driven functionalities, I ensure every layer of the stack works in harmony to deliver high-performing results. My goal is to develop full-stack solutions that exceed technical requirements and provide exceptional user experiences.',
        skills: [
            {
                skill_name: 'React',
                description: 'Developed multiple full-stack applications using React for the front-end, ensuring scalability and component-driven architecture.',
                icon_path: Reacticon
            },
            {
                skill_name: 'Node.js & Express.js',
                description: 'Experienced in building RESTful APIs and handling back-end logic with Node.js and Express.js, managing database connections, authentication, and application workflows.',
                icon_path: Nodejsicon
            },
            {
                skill_name: 'SQL/NoSQL Databases',
                description: 'Proficient in managing both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases, optimizing queries, designing schemas, and ensuring data integrity.',
                icon_path: SQLicon
            },
            {
                skill_name: 'Version Control (Git)',
                description: 'Skilled in using Git for version control, ensuring collaborative development and proper code management across various team projects.',
                icon_path: Giticon
            }
        ]
    }
}

export default job_skills
