import React from 'react'
import styles from './Btn1.module.css';

function Btn1({ text1,text2,img }) {
    return (
        <>
            <span className={styles.btn}>
                <p><span>{text1} {img && (<img src={img} alt="" />)} </span>
                    <span>{text2}</span>
                </p>
            </span>
        </>
    )
}

export default Btn1