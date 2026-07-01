import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import card from './Card1.module.css';


import arrowDownLinkedWhite from '../../../assets/icons/arrowDownLinkedWhite.svg';

import camera from '../../../assets/icons/camera.svg';
import photo1 from '../../../assets/cards_imgs/photo1.jpg';
import hashtagWhite from '../../../assets/icons/hashtagWhite.svg'
import clockWhite from '../../../assets/icons/clockWhite.svg'
import arrowLeftWhite from '../../../assets/icons/arrowLeftWhite.svg'
import microphoneWhite from '../../../assets/icons/microphoneWhite.svg';
import spFlag from '../../../assets/icons/spFlag.svg'
import Btn1 from '../../../components/Buttons/Btn1/Btn1';


function Card1({
    paragraph,
    word1ExplLearning,
    word1ExplKnown,
    word2ExplLearning,
    word2ExplKnown,
    parag1Expl,
    firstQuest,
    secondQuest,
    thirdQuest,
    answerImage = 1,
    typeAnswerDesc = 1,
    audio,
    nextStep,
    backStep }) {

    const answerDescText = "Sube una foto del papel con las respuestas.";
    const answerDescAudio = "Reproduce un audio con las respuestas.";

    let answerDesc = typeAnswerDesc == 1 ? answerDescText : answerDescAudio;
    let answerImagesDef = answerImage == 1 ? camera : microphoneWhite;


    /* parrafo reproducir audio */

    const audioArticle = useRef(null);


    function playAudio() {
        audioArticle.current.currentTime = 0;
        audioArticle.current.play();
    }

    return (
        <>
            <div className={card.container}>

                <section className={card.navbarContainer}>
                    <nav className={card.navbar}>
                        <ul>
                            <li>
                                <img className={card.navbarImg} src={spFlag} alt="" />
                                <p>Beginner <span>Lesson 1.</span>  </p>
                            </li>
                            <li>
                                <Link to={"/dashboard"}> <img src={arrowLeftWhite} alt="" /> </Link>
                            </li>
                        </ul>
                    </nav>
                </section>

                <div className={card.articleContainer}>

                    <section className={card.article}>
                        <audio controls autoPlay ref={audioArticle}>
                            <source src={audio} type="audio/ogg;" />
                        </audio>
                        <header className={card.header}>
                            <h1 onClick={playAudio}> {paragraph} </h1>

                            <div className={card.explanation}>

                                {word1ExplLearning && (
                                    <div>
                                        <p> significa: <span>{word1ExplKnown}</span> </p>
                                    </div>
                                )}

                                {word2ExplLearning && (
                                    <p><b>{word2ExplLearning} </b> significa <span>{word2ExplKnown}</span> </p>
                                )}

                                {parag1Expl && (
                                    <div>
                                        <p>significa:  <span> como estas, donde esta tu amigo?</span> </p>
                                    </div>
                                )}
                            </div>

                            <div className={card.headerImage}>
                                <img src={photo1} alt="" />
                            </div>
                        </header>


                        <ul className={card.question}>
                            <h5><img src={clockWhite} alt="" />Done in less than 5 min</h5>
                            {firstQuest && (
                                <li>
                                    <p> ¿Como escribirias <b>{firstQuest}</b> ?</p>
                                    <img src={arrowDownLinkedWhite} alt="" />
                                </li>
                            )}

                            {secondQuest && (
                                <li>
                                    <p>¿Como dirias <b>{secondQuest}</b> ?</p>
                                    <img src={arrowDownLinkedWhite} alt="" />
                                </li>
                            )}

                            {thirdQuest && (
                                <li>
                                    {thirdQuest}
                                </li>
                            )}



                        </ul>


                        <div className={card.answer}>
                            <label className={card.answerInput} htmlFor="upload">
                                <p>{answerDesc}</p>
                                <div className={card.btnImageInput}>
                                    <img src={answerImagesDef} alt="" />
                                </div>
                            </label>
                            <input onClick={nextStep} type="file" name="" id="upload" required />
                        </div>

                    </section>

                </div>

                <p onClick={backStep}>Ir atras</p>
            </div>

        </>
    )
}

export default Card1