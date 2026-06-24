import React, { useState } from 'react'
import styles from './Register.module.css'
import { Link } from 'react-router-dom';

function Register() {

    const [step, setStep] = useState(1);

    return (
        <>
            <div className={styles.registerSec}>

                {step === 1 && (

                    <section className={styles.importantParagraphs}>

                        <p>Esta metodologia solo ha sido creada para personas que realmente se van a tomar en serio el aprendizaje,
                            para personas que el ingles representa o representará algo en sus vidas.</p>

                        <p>
                            Ha sido diseñada especificamente teniendo en cuenta: días que no tienes mucho animo de estudiar,
                            si solo puedes dedicarle 30 minutos al dia y sobretodo mantenible en el tiempo
                        </p>

                        <p>Hemos pasado meses y años refinando cada funcionalidad, estrategia, y sección, todo ha tenido una razón detrás.</p>

                        <p>Es fundamental que ahora coloques de tu parte <br /> para que este entrenamiento funcione</p>

                        <button onClick={() => setStep(2)}>Lo tendre en cuenta</button>

                        {/*Arrow function: without that it executes when rendering, with that executes only if the user clicks in */}

                    </section>
                )}

                {step === 2 && (
                    <div>

                        <form action="" className={styles.form}>
                            <label htmlFor="">Name
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>
                            <label htmlFor="">Lastname
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>
                            <label htmlFor="">Username
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>
                            <label htmlFor="">Password
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>
                            <label htmlFor="">Date of Birth
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>
                            <label htmlFor="">Profile Picture
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>

                            <label htmlFor="">Mother Tongue
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label>
                            

                        </form>

                        <button onClick={() => setStep(3)}>Avanzar</button>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <label htmlFor="">
                            <h1>Could you tell us your interets?</h1>
                            <input type="text" />
                        </label>
                        {/* use navigate */}
                        <Link to="/dashboard">Enviar Datos</Link>
                    </div>

                )}
            </div>
        </>
    )
}

export default Register