import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Arrow.css';

export default function Arrow({ isDarkMode }) {
  return (
    <div className="arrow-container">
      <motion.div
        className="arrow-icon"
        initial={{ y: 0 }}
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FaArrowDown size={30} />
      </motion.div>

      <svg viewBox="0 0 100 100" className={!isDarkMode ? 'svg-text light-button' : 'svg-text dark-button'}>
        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        <text>
          <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle">
            Scroll Down
          </textPath>
        </text>
      </svg>
    </div>
  );
}
