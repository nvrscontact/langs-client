import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import profileOne from '../../assets/imgs/profileOne.jpg'


import arrowDown from '../../assets/icons/arrowDown.svg'
import config from '../../assets/icons/config.svg'
import logout from '../../assets/icons/logout.svg'
import starWhite from '../../assets/icons/starWhite.svg'
import hamburgerMenu from '../../assets/icons/hamburgerMenu.svg'
import frFlag from '../../assets/icons/frFlag.svg'
import spFlag from '../../assets/icons/spFlag.svg'
import ukFlag from '../../assets/icons/ukFlag.svg'



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.headerContainer} >

            <nav className={styles.navbarMenu}>

                <section className={styles.pictureProfile}>
                    <Link to="/user-profile">
                        <img src={profileOne} alt="" />
                    </Link>
                </section>

                <section className={styles.userInfo}>
                    <h4>Alonso Nuñez</h4>
                    <span>Software Developer</span>
                </section>

                <div>

                    <section className={styles.languageOptions}>
                        <span>A1</span>
                        <img src={spFlag} alt="" />
                    </section>

                    <section className={styles.navigationMenu}
                        onClick={() => setIsOpen(!isOpen)}>
                        <img src={hamburgerMenu} alt="" />
                    </section>

                </div>


                <ul className={`${styles.list} ${isOpen ? styles.open : ""} `} >
                    <li> <Link to="/dashboard">Home</Link></li>
                    <li> <Link to="/training">Training</Link></li>
                    <details>
                        <summary><img src={arrowDown} alt="" /> Progress</summary>
                        <div>
                            <li> <Link to="/real-life-situations">Real-Life Situations</Link></li>
                            <li> <Link to="/words-learned">Active Words</Link></li>
                            <li> <Link to="/words-learned">Vocabulary</Link></li>
                            <li> <Link to="/grammar-learned">Grammar</Link></li>

                        </div>
                    </details>
                    <li> <Link to="/social-chat">Social</Link></li>
                    <br />

                    <details>
                        <summary><img src={arrowDown} alt="" />Interesting</summary>
                        <div>
                            <li> <Link to="/methodology">Methodology</Link></li>
                            <li> <Link to="/cefr-aligned">CEFR-Aligned</Link></li>
                            <li> <Link to="/science-based">Science-based</Link></li>
                        </div>
                    </details>

                    <details className={styles.appLanguageSelect}>
                        <summary> <img src={arrowDown} alt="" />App Language</summary>
                        <div >
                            <li> <Link to="/real-life-situations"> <img src={spFlag} alt="" /> Spanish</Link></li>
                            <li> <Link to="/real-life-situations"> <img src={ukFlag} alt="" /> English</Link></li>
                            <li> <Link to="/real-life-situations"> <img src={frFlag} alt="" /> Francais</Link></li>

                        </div>
                    </details>

                    <section className={styles.dropdownIconsBelow}>
                        <Link to="/configuration"> <img src={logout} alt="" /></Link>
                        <Link to="/configuration"> <img src={starWhite} alt="" /></Link>
                        <Link to="/configuration"> <img src={config} alt="" /></Link>

                    </section>
                </ul>

            </nav>


        </header>
    )
}

export default Navbar