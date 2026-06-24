import React, { useState } from 'react'

import upload from '../../../assets/icons/upload.svg';
import img_example from '../../../assets/icons/img_example.svg';
import improving from '../../../assets/icons/improving.svg';
import video_test from '../../../assets/video/test.mp4';

import uk_flag from '../../../assets/icons/uk_flag.svg';
import camera from '../../../assets/icons/camera.svg';
import microphone from '../../../assets/icons/microphone.svg';

import Btn1 from '../../../components/Buttons/Btn1/Btn1';

import card from './Card.module.css';

function TrainingCards() {
  const [step, setStep] = useState(1);

  return (
    <>

      {/* Separarlos en components */}
      {step === 1 && (
        <div className={`${card.sec}`} >



          <section className={card.topInfoCard}>
            <span>It takes &lt;2 minutes</span>
          </section>

          <section className={card.card}>
            <div className={card.paragraph}>
              <h3> Hello, how are <span>you</span> feeling tonight? <span>Where</span> is your friend?</h3>
              <div>
                <section>
                  <p><b>You</b> significa <b>tú</b> </p>
                  <img src={improving} alt="" />
                </section>

                <section>
                  <p><b>Where</b> significa <b>donde</b> </p>
                  <img src={improving} alt="" />
                </section>

              </div>
            </div>


            <div className={card.question}>
              <p>¿Que palabra uso para referirme a 'donde' ?</p>
              <p>¿Que palabra uso para referirme a 'ti' ?</p>
            </div>


            <div className={card.answer}>
              <label className={card.answer__input} htmlFor="upload">
                <span>Sube una foto del papel en el  <br />que escribiste las respuestas.</span>
                <div>
                  <img src={camera} alt="" />
                </div>
              </label>
              <input type="file" name="" id="upload" required />
            </div>

          </section>

          <section className={card.bottomInfoCard}>
            <p>Listening</p> •
            <p>Writing</p> •
            <p>Reading</p>
          </section>

          <div onClick={() => setStep(2)}>
            <Btn1 text1="Avanzar" text2="siguiente paso" />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={card.sec} >

          <section className={card.infoTopCard}>
            <div>
              <b>2.</b>
            </div>

            <div>
              <h4>Writing · Reading</h4>
              <span>It takes &lt;2 minutes</span>
            </div>

            <img src={uk_flag} alt="" />

          </section>

          <section className={card.card}>
            <div className={card.paragraph}>
              <h3>¿What is your name?</h3>
            </div>

            <div className={card.answer}>
              <label className={card.answer__input} htmlFor="upload">
                <span>Sube una foto del papel en el  <br />que escribiste las respuestas.</span>
                <div>
                  <img src={camera} alt="" />
                </div>
              </label>
              <input type="file" name="" id="upload" required />
            </div>

          </section>

          <div onClick={() => setStep(3)}>
            <Btn1 text1="Avanzar" text2="siguiente paso" />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={` ${card.sec} ${card.third_card} `} >

          <section className={card.infoTopCard}>
            <div>
              <b>3.</b>
            </div>

            <div>
              <h4>Listening · Reading · Writing</h4>
              <span>It takes &lt; 6 minutes</span>
            </div>

            <img src={uk_flag} alt="" />

          </section>

          <section className={card.card}>
            <div className={card.paragraph}>
              <video controls>
                <source src={video_test} type="video/mp4" />
                Your browser don't support the video
              </video>
            </div>

            <div className={card.advice}>
              Puedes volver a reproducir el video
            </div>

            <div className={card.question}>
              <p>¿Reconocí alguna palabra nueva, algunos detalles, la idea principal o ideas secundarias?</p>
            </div>

            <div className={card.answer}>
              <label className={card.answer__input} htmlFor="upload">
                <span>Reproduce un audio  <br />con las respuestas.</span>
                <div>
                  <img src={microphone} alt="" />
                </div>
              </label>
              <input type="file" name="" id="upload" required />
            </div>

          </section>

          <div onClick={() => setStep(4)}>
            <Btn1 text1="Avanzar" text2="siguiente paso" />
          </div>
        </div>
      )}




    </>
  )
}

export default TrainingCards