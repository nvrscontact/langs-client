import React from 'react'
import styles from './Btn1.module.css';

function Btn1({ text1,text2 }) {
    return (
        <>
            <button className={styles.btn}>
                <p><span>{text1}</span>
                    <span>{text2}</span>
                </p>
            </button>
        </>
    )
}

export default Btn1