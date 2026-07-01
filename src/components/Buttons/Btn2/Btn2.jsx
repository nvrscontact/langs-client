import React from 'react'
import styles from './Btn2.module.css'
import arrow_link from '../../../assets/icons/arrow_link.svg';

function Btn2({ text1, img }) {
  return (
    <>
      <button className={styles.btn}>
        <div>
          <p>
            {text1}
          </p>
          <section>
            <img src={img} alt="" />
          </section>
        </div>
      </button>
    </>
  )
}

export default Btn2