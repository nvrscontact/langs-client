import React from 'react'
import fr_flag from '../../../assets/icons/fr_flag.svg';
import sp_flag from '../../../assets/icons/sp_flag.svg';
import uk_flag from '../../../assets/icons/uk_flag.svg';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Good evening Kate</h1>
      <span>We are improving?</span>

      <div>
        <h1>Languages Availables</h1>
        <span>for learn on your language</span>

        <div>

          <section>
            <img src={fr_flag} alt="" />
            <h2>French</h2>
          </section>
          <section>
            <img src={sp_flag} alt="" />
            <h2>Spanish</h2>
          </section>
          <section>
            <img src={uk_flag} alt="" />
            <h2>English</h2>
          </section>
        </div>
      </div>

      <div>
        <h1>Seguir entrenamiento</h1>
        <Link to="/training">Keep Going</Link>
      </div>
    </div>
  )
}

export default Dashboard