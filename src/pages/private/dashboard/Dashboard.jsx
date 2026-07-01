import React from 'react'
import { Link } from 'react-router-dom';
import cards from './Card.module.css';
import dashboard from './Dashboard.module.css';

import Btn2 from '../../../components/Buttons/Btn2/Btn2';
import Btn1 from '../../../components/Buttons/Btn1/Btn1';

import franceBg from '../../../assets/imgs/franceBg.png';
import profileOne from '../../../assets/imgs/profileOne.jpg';
import profileTwo from '../../../assets/imgs/profileTwo.webp';

import darkMap from '../../../assets/imgs/darkMap.png';


import frFlag from '../../../assets/icons/frFlag.svg';
import spFlag from '../../../assets/icons/spFlag.svg';
import ukFlag from '../../../assets/icons/ukFlag.svg';
import louvre from '../../../assets/icons/louvre.png';
import snowy from '../../../assets/icons/snowy.svg';



function Dashboard() {

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  let hourFormatted = "";
  let minutesFormatted = "";

  if (hour < 10) {
    hourFormatted = 0 + "" + hour;
  } else {
    hourFormatted = hour;
  }

  if (minutes < 10) {
    minutesFormatted = 0 + "" + minutes;
  } else {
    minutesFormatted = minutes;
  }


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
    <>


      <section className={dashboard.heroContainer}>
        <header className={dashboard.greeting}>
          {dayMessage}, <br />
          <div>
            <span>Kuznetosva</span>.
            <p className={dashboard.date}>
              <span>{hourFormatted}:{minutesFormatted}</span>
              <span><img src={snowy} alt="" /></span> </p>
          </div>
        </header>
      </section>

      <section className={dashboard.trainingContainer}>
        <div className={dashboard.training}>
          <p className={dashboard.descriptitveMsg}>If you think it better, every day you have at least 10m free</p>

          <header className={`header-basic`}>
            <h2>Let's get started</h2>
            <span>Remember, you're getting <br /> closer every day</span>
          </header>

          <Link to="/training"><Btn1 text1="Continue" img={ukFlag} /></Link>
        </div>
      </section>

      <section className={dashboard.stadisticsContainer}>
        <div className={dashboard.stadistics}>

          <header>
            <img src={frFlag} alt="" />
            <div>
              <h3>English C2</h3>
              <p>Intermediate</p>
            </div>
          </header>

          <article>
            <div>
              <p>4</p>
            </div>
            <div>
              <h3 className='degraded-text-white'>Real-Life Situations </h3>
              <p>You can handle.</p>
            </div>
          </article>

          <article>
            <div>
              <p>55%</p>
            </div>
            <div>
              <h3 className='degraded-text-white'>Progress </h3>
              <p>For complete level.</p>
            </div>
          </article>


          <article>
            <div>
              <p>+10</p>
            </div>
            <div>
              <h3 className='degraded-text-white'>Active words </h3>
              <p>You are confident using.</p>
            </div>
          </article>

        </div>
      </section>

      <section className={cards.languagesContainer}>
        <header className={`header-basic`}>
          <h2>Available Languages</h2>
          <span>for learn on your language</span>
        </header>

        <div className={cards.cardsCarrousel}>

          <section> {/* French */}

            <div className={cards.languageCard}>
              <img className={cards.countryBackground} src={franceBg} alt="" />

              <header>
                <section>
                  <img className={cards.countryFlag} src={frFlag} alt="" />
                  <div className={cards.infoLanguage}>
                    <section>
                      <h3>French</h3>
                    </section>
                    <span>+300 million speakers</span>
                  </div>
                </section>
                <img className={cards.infoIcon} src={louvre} alt="" />
              </header>

              <main>
                <img className={cards.dark_map} src={darkMap} alt="" />

                <section className={cards.sec_one}>
                  <article>
                    <img src={profileTwo} alt="" />
                    <div>
                      <p>Bonjour</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <p>Ca va?</p>
                    </div>
                    <img src={profileOne} alt="" />
                  </article>

                </section>

                <section className={cards.sec_two}>
                  <div>
                    <p>Strong in Business and Education</p>
                  </div>

                  <div className={cards.levels}>
                    Levels:
                    <span>A1 - A2</span>
                    <span>B1 - B2</span>
                    <span>C1 - C2</span>
                  </div>
                  <div>
                    <p>Spoken in +30 countries</p>
                  </div>
                </section>


              </main>

            </div>

            <footer>
              <Link to="/training"><Btn1 text1="Start" img={ukFlag} /></Link>
              <p className={cards.btnBelowDesc}>Speak with elegance</p>
            </footer>

          </section>

        </div>

      </section>

      <section className={dashboard.infoContainer}>
        <div className={dashboard.info}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laborum sequi perspiciatis nemo obcaecati minima.
          </p>
        </div>
      </section>



      <footer className={dashboard.footer}>
        <p>Seraphic</p>
        <p>© 2026 Brilliant Technologies </p>
      </footer>


    </>
  )
}

export default Dashboard