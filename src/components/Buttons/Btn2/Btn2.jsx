import React from 'react'
import styles from './Btn2.module.css'
import arrow_link from '../../../assets/icons/arrow_link.svg';

function Btn2({text1}) {
  return (
    <>
    <button className={`${styles.btn} ${styles.animated_border_white}`}>
      <div>
        <section>
        </section>
        <p className={styles.animated_text_white}>
        {text1}
        </p>
        <section>
        <img src={arrow_link} alt="" />
        </section>
      </div>
    </button>
    </>
  )
}

export default Btn2