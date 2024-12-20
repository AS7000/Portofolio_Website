import './Education.css'
import Card from './Card';
export default function Education({ isDarkMode }) {

    return(
        <section className="History">
            <div className='History-contatiner'>
                <h5 className='History-header'>Education</h5>
                <h1 className='History-title'>The Journey of My Education.</h1>
            </div>
            <div className='cards'>
                <Card isDarkMode={isDarkMode} Card_id={'HIC'} secs={0.2}/>
                <Card isDarkMode={isDarkMode} Card_id={'Hertfordshire'} secs={0.4}/>
                <Card isDarkMode={isDarkMode} Card_id={'Strathclyde'} secs={0.6}/>
            </div>
        </section>
    );
}

