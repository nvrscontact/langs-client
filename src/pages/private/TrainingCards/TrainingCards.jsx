import React, { useState } from 'react'
import styles from './TrainingCards.module.css'

import Btn1 from '../../../components/Buttons/Btn1/Btn1';
import Card1 from './Card1';
import microphoneWhite from '../../../assets/icons/microphoneWhite.svg';
import you from '../../../assets/cards_audio/you.ogg';
import howare from '../../../assets/cards_audio/howare.ogg';


function TrainingCards() {
  const [step, setStep] = useState(1);

  const updateStep = () => {
    setStep(prev => prev + 1);
  }

  const backStep = () => {
    setStep(prev => prev - 1);
  }

  return (
    <>



      {step === 1 && (
        <Card1
          paragraph={
            <>
              Where
            </>
          }
          audio = {you}
          word1ExplLearning="Where"
          word1ExplKnown="cuando"
          firstQuest="cuando"
          nextStep={updateStep}
        />
      )}

      {step === 2 && (
        <Card1
          paragraph={
            <>
              Hello, how are <span>you</span> tonight, where is your friend ?
            </>
          }
          audio = {howare}
          parag1Expl="como estas?"
          firstQuest="como estas, Alonso"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

      {step === 3 && (
        <Card1
          paragraph={
            <>
              <span>Perro</span>
            </>
          }
          firstQuest="Perro"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

      {step === 4 && (
        <Card1
          paragraph={
            <>
              <span>Saludar</span>
            </>
          }
          firstQuest="como estas"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}


      {step === 5 && (
        <Card1
          paragraph={
            <>
              <span>You, esc</span>
            </>
          }
          firstQuest="tu"
          answerImage={microphoneWhite}
          typeAnswerDesc={"2"}
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

          {step === 6 && (
        <Card1
          paragraph={
            <>
              <span>How are you, esc</span>
            </>
          }
          firstQuest="como estas"
          answerImage={"2"}
          typeAnswerDesc={"2"}
          nextStep={updateStep}
          backStep={backStep}
        />
      )}


       {step === 7 && (
        <Card1
          paragraph={
            <>
              <span>esc wo</span>
            </>
          }
          thirdQuest="¿Puedes pronunciar lo que has escuchado?"
          answerImage={"2"}
          typeAnswerDesc={"2"}
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

       {step === 8 && (
        <Card1
          paragraph={
            <>
              <span>esc fr</span>
            </>
          }
          thirdQuest="¿Puedes pronunciar lo que has escuchado?"
          answerImage={"2"}
          typeAnswerDesc={"2"}
          nextStep={updateStep}
          backStep={backStep}
        />
      )}


       {step === 9 && (
        <Card1
          paragraph={
            <>
              <span>¿Where do you live?</span>
            </>
          }
          thirdQuest="¿Puedes responder a lo que has escuchado?"
          answerImage={"2"}
          typeAnswerDesc={"2"}
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

         {step === 10 && (
        <Card1
          paragraph={
            <>
              <span>Esc quest</span>
            </>
          }
          thirdQuest="¿Puedes responder a lo que has escuchado?"
          answerImage={"2"}
          typeAnswerDesc={"2"}
          nextStep={updateStep}
          backStep={backStep}
        />
      )}





    </>
  )
}

export default TrainingCards