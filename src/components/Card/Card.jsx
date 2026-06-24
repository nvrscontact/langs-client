import React from 'react'
import styles from './Card.module.css'

/** CSS Modules: If we have two classes with the same name in different css files when 
 * React charge it and the result can be unexcepted, CSS create dynamics random name  **/

export default function Card() {
  return (
    <div className={styles.title}>Card</div>
  )
}
