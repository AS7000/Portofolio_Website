import { motion } from 'framer-motion';
import './Card.css';
import Education_info from './Education_details';

export default function Card({ isDarkMode, Card_id, secs }) {

    return (
        <motion.div
            className='card-container'
            initial={{ x: '-100vw' }}  
            animate={{ x: 0 }}         
            transition={{ type: 'spring', stiffness: 50, delay: secs, duration: 2}}  
        >
            <img
                className='Number-logo'
                src={Education_info[Card_id].logo}
                alt={`${Education_info[Card_id].Degree} Logo`}
            />
            <div className='content'>
                <h2 className='Degree'>
                    {Education_info[Card_id].Degree}
                </h2>
                <h3 className='Description'>
                    {Education_info[Card_id].Description}
                </h3>
            </div>
        </motion.div>
    );
}
