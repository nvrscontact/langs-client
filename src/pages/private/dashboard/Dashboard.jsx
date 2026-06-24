import React from 'react'
import fr_flag from '../../../assets/icons/fr_flag.svg';
import sp_flag from '../../../assets/icons/sp_flag.svg';
import uk_flag from '../../../assets/icons/uk_flag.svg';
import { Link } from 'react-router-dom';
import louvre from '../../../assets/icons/louvre.png';
import country from '../../../assets/icons/country.svg';

import france_bg from '../../../assets/imgs/france_bg.jpg';
import spain_bg from '../../../assets/imgs/spain_bg.jpg';
import uk_bg from '../../../assets/imgs/uk_bg.jpeg';

import profile_one from '../../../assets/imgs/profile_one.jpg';
import profile_two from '../../../assets/imgs/profile_two.webp';


import card from './Card.module.css';
import dashboard from './Dashboard.module.css';

import Btn2 from '../../../components/Buttons/Btn2/Btn2';

function Dashboard() {

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  let dayMessage = "";
  if (hour >= 6 && hour <= 11) {
    dayMessage = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    dayMessage = "Good Afternoon";
  } else if (hour >= 17 && hour <= 23) {
    dayMessage = "Good Evening";
  } else {
    dayMessage = "Good Night";
  }

  return (
    <div>

      <section className={dashboard.hero}>

      <h2 className={dashboard.greeting}>{dayMessage}, <br /> <span>Kate</span>.</h2>
      <span>We are improving?</span>
      <span>It's {hour}:{minutes}</span>

      </section>


      <div className={card.languages}>
        <h2>Languages Availables</h2>
        <span>for learn on your language</span>

        <div className={card.cardCarrousel}>

          <section>

            <div className={card.languageCard}>
              <img className={card.countryBackground} src={france_bg} alt="" />

              <section>

                <header>
                  <section>
                    <img className={card.countryFlag} src={fr_flag} alt="" />
                    <div>
                      <section>
                        <h3>French</h3>
                        <span>+30 <img className={card.countryIcon} src={country} alt="" /></span>
                      </section>
                      <span>+300 million speakers</span>
                    </div>
                  </section>
                  <img className={card.infoIcon} src={louvre} alt="" />
                </header>

                <main>
                  <article>
                    <img src={profile_two} alt="" />
                    <div>
                      <span>Kate Anderson</span>
                      <p>Comment vas-tu?</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <span>Jax Kuznetsova</span>
                      <p>Je va bien, merci.</p>
                    </div>
                    <img src={profile_one} alt="" />
                  </article>
                </main>

              </section>

              <aside>
                <h5>Levels Available</h5>
                <section>
                  <div>
                    <span>A1</span>
                    <span>A2</span>
                  </div>
                  <div>
                    <span>B1</span>
                    <span>B2</span>
                  </div>
                  <div>
                    <span>C1</span>
                    <span>C2</span>
                  </div>
                </section>
              </aside>

            </div>

            <footer>
              <Btn2 text1={"Empezar"} />
              <span>Speak with elegance</span>
            </footer>

          </section>

          <section>

            <div className={card.languageCard}>
              <img className={card.countryBackground} src={france_bg} alt="" />

              <section>

                <header>
                  <section>
                    <img className={card.countryFlag} src={fr_flag} alt="" />
                    <div>
                      <section>
                        <h3>French</h3>
                        <span>+30 <img className={card.countryIcon} src={country} alt="" /></span>
                      </section>
                      <span>+300 million speakers</span>
                    </div>
                  </section>
                  <img className={card.infoIcon} src={louvre} alt="" />
                </header>

                <main>
                  <article>
                    <img src={profile_two} alt="" />
                    <div>
                      <span>Kate Anderson</span>
                      <p>Comment vas-tu?</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <span>Jax Kuznetsova</span>
                      <p>Je va bien, merci.</p>
                    </div>
                    <img src={profile_one} alt="" />
                  </article>
                </main>

              </section>

              <aside>
                <h5>Levels Available</h5>
                <section>
                  <div>
                    <span>A1</span>
                    <span>A2</span>
                  </div>
                  <div>
                    <span>B1</span>
                    <span>B2</span>
                  </div>
                  <div>
                    <span>C1</span>
                    <span>C2</span>
                  </div>
                </section>
              </aside>

            </div>

            <footer>
              <Btn2 text1={"Empezar"} />
              <span>Speak with elegance</span>
            </footer>

          </section>

          <section>

            <div className={card.languageCard}>
              <img className={card.countryBackground} src={france_bg} alt="" />

              <section>

                <header>
                  <section>
                    <img className={card.countryFlag} src={fr_flag} alt="" />
                    <div>
                      <section>
                        <h3>French</h3>
                        <span>+30 <img className={card.countryIcon} src={country} alt="" /></span>
                      </section>
                      <span>+300 million speakers</span>
                    </div>
                  </section>
                  <img className={card.infoIcon} src={louvre} alt="" />
                </header>

                <main>
                  <article>
                    <img src={profile_two} alt="" />
                    <div>
                      <span>Kate Anderson</span>
                      <p>Comment vas-tu?</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <span>Jax Kuznetsova</span>
                      <p>Je va bien, merci.</p>
                    </div>
                    <img src={profile_one} alt="" />
                  </article>
                </main>

              </section>

              <aside>
                <h5>Levels Available</h5>
                <section>
                  <div>
                    <span>A1</span>
                    <span>A2</span>
                  </div>
                  <div>
                    <span>B1</span>
                    <span>B2</span>
                  </div>
                  <div>
                    <span>C1</span>
                    <span>C2</span>
                  </div>
                </section>
              </aside>

            </div>

            <footer>
              <Btn2 text1={"Empezar"} />
              <span>Speak with elegance</span>
            </footer>

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