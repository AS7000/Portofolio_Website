import MSc from '../../assets/FBG.jpg';
import SV from '../../assets/Smart_voice.jpg';
import FR from '../../assets/Face_Recognition.jpg';
import VP from '../../assets/Visual Polution.jpg';

const info = {
    '0':{
        title: 'Distributed Photonic Sensing in Power Grids with Deep Learning: Addressing Hysteresis and De-aging in Piezoelectric Transducers',
        description:'This project tackles hysteresis and spike-induced de-aging (SID) challenges in piezoelectric transducers used for distributed photonic sensing in power grids. By integrating deep learning with photonic sensing, this work introduces an advanced method to improve sensor accuracy and reliability. SID, a performance-degrading phenomenon triggered by voltage surges, is analyzed through controlled experiments to understand its behavior under different conditions. A deep learning model is then trained to counteract these effects, achieving a 61% reduction in signal recovery time. This solution significantly boosts sensor stability and accuracy, supporting more efficient and reliable energy management in dynamic power grid environments',
        image: MSc
    },
    '1':{
        title:'Smart Voice',
        description:'As the lead AI developer on this project, I spent a year building a machine learning solution for a mobile app to non-invasively detect diseases, such as recurrent respiratory papillomatosis (RRP), through voice analysis. This app is designed for rural regions with limited access to medical professionals and diagnostic equipment. By analyzing voice patterns associated with RRP, the app facilitates early detection and minimizes the need for invasive procedures. This project addresses critical healthcare challenges in underserved areas, providing an accessible tool for timely diagnosis and intervention',
        image: SV
    },
    '2':{
        title:'Visula Pollution Detection: A Step Towards Cleaner Urban',
        description: 'In this project, I contributed to developing a semantic segmentation deep learning model designed to detect and classify different types of pollution—from beach litter to rubble after seismic events. This model assesses puplic street cameras feeds to determine pollution levels in real-time, offering authorities valuable insights to support cleaner, safer urban environments.',
        image: VP
    },
    '3':{
        title:'Smart Presence: Attendance and Intruder alerting system using Face recognition',
        description:'As my BSc project and entry point into AI, this work focused on automating attendance with facial recognition technology. Through testing various methods, I found that the CNN-based approach delivered the best results, demonstrating its potential for enhancing both accuracy and security in attendance systems',
        image: FR
    }

}

export default info