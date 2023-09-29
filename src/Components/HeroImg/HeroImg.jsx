import React from 'react';
import HeroImage from '../../Assets/HeroImg.svg';
import styles from '../HeroImg/HeroImg.module.css';

const HeroImg = () => {
  return (
    <img src={HeroImage} alt='logo' width={67} className={styles.group} />
)
}

export default HeroImg
