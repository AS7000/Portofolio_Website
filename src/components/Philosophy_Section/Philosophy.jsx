import { section } from 'framer-motion/client';
import './Philosophy.css';
import philosophy_script from './script';
export default function Philosophy({ isDarkMode }) {
    const sentences = philosophy_script.split('.').filter(sentence => sentence.trim() !== '');

    return(
        <section className='philosophy'>
            <div className='my_philosophy'>
                <h1>Philosophy and Values</h1>
                <div className="philosophy-text">{sentences.map((sentence, index) => (
                    <p key={index}>{sentence.trim()}.</p>
                ))}</div>

            </div>
            <div className='picture'>

            </div>
        </section>
    );
}
