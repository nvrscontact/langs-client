import React, { useState } from 'react'
import styles from './GrammarLearned.module.css';
import findAll from '../../../../services/hooks/findAll';
import { addRow } from '../../../../services/hooks/addRow';



function GrammarLearned() {

  const grammarRules = findAll("grammar");

  const [languageId, setLanguageId ] = useState(0);
  const [languageRuleId, setLanguageRuleId ] = useState(0);
  const [rule, setRule ] = useState("");
  const [level, setLevel ] = useState("");

  function addGrammar(){

    const grammar = { 
      language_id:languageId,
      language_rule_id: languageRuleId,
      rule:rule,
      level:level,
      table_name:"grammar"
    };

    addRow(grammar);
    
  }

  return (
    <>
      <div className={styles.grammarLearned}>
        <div className={`header-basic`}>
          <h2>Grammar Learned</h2>
          <span>only those necessary to complete levels.</span>
        </div>

        <input type={languageId} onChange={(e) => setLanguageId(e.target.value)} />
        <input type={languageRuleId} onChange={(e) => setLanguageRuleId(e.target.value)} />
        <input type={rule} onChange={(e) => setRule(e.target.value)} />
        <input type={level} onChange={(e) => setLevel(e.target.value)} />

          <button onClick={addGrammar}>Añadir</button>

          {grammarRules.map(grammar => (
          <p key={grammar.id}>{grammar.rule}</p>
        ))}

      </div>
    </>
  )
}

export default GrammarLearned