import React, { useEffect, useState } from 'react'
import styles from './WordsLearned.module.css';
import findAll from '../../../../services/hooks/findAll';
import { addRow } from '../../../../services/hooks/addRow';


function WordsLearned() {

  const words = findAll("words");

  const [languageId, setLanguageId] = useState(0);
  const [word, setWord] = useState("");
  const [level,setLevel] = useState("");

 function handleSubmit(){

    /* At the end of the obj we need to specify on what table we want to put this object */
    const word = {
      language_id: languageId,
      word:word,
      level:level,
      table_name:"words"
    };

    addRow(row);

  }

  return (
    
    <>
    <div className={styles.wordsLearned}>

      <div className={`header-basic`}>
        <h2>Words Learned</h2>
        <span>only those necessary to complete levels.</span>
      </div>

      <section>
          Formulario:

            <input value={languageId}
            onChange={e => setLanguageId(e.target.value)} />
            <input value={word}
            onChange={e => setWord(e.target.value)} />
            <input value={level}
            onChange={e => setLevel(e.target.value)} />


          <button onClick={handleSubmit}>Presioname</button>

      </section>

      <section className={styles.levelSection}>
        <details>
          <summary>A1- Words</summary>

          <div>
            {words.map(w => ( 
              <p key={w.id}>{w.language_id} {w.word}</p>
            ) )}
          </div>
        </details>
      </section>
      

    </div>
    </>
  )
}

export default WordsLearned

