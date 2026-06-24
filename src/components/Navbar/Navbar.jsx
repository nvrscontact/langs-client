import React, { useState } from 'react'
import fr_flag from '../../assets/icons/fr_flag.svg'
import sp_flag from '../../assets/icons/sp_flag.svg'
import uk_flag from '../../assets/icons/uk_flag.svg'

import arrow_down from '../../assets/icons/arrow_down.svg'

import navbar_menu from '../../assets/icons/navbar_menu.svg'
import profile_one from '../../assets/imgs/profile_one.jpg'
import profile_two from '../../assets/imgs/profile_two.webp'

import menu from '../../assets/icons/menu.svg'


import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.navbarSec} >

            <nav className={styles.navbarMenu}>

                <section className={styles.pictureProfile}>
                    <Link to="/user-profile">
                        <img src={profile_one} alt="" />
                    </Link>
                </section>

                <section className={styles.userInfo}>
                    <h4>Alonso Nuñez</h4>
                    <span>Software Developer</span>
                </section>

                <div>

                    <section className={styles.languageOptions}>
                        <span>A1</span>
                        <img src={uk_flag} alt="" />
                    </section>

                    <section className={styles.navigationMenu}
                        onClick={() => setIsOpen(!isOpen)}>
                        <img src={menu} alt="" />
                    </section>


                </div>



                <ul className={`${styles.list} ${isOpen ? styles.open : ""} `} >
                    <li> <Link to="/dashboard">Home</Link></li>
                    <li> <Link to="/training">Training</Link></li>
                    <details>
                        <summary><img src={arrow_down} alt="" /> Progress</summary>
                        <div>
                            <li> <Link to="/real-life-situations">Real-Life Situations</Link></li>
                            <li> <Link to="/grammar-learned">Grammar Learned</Link></li>
                            <li> <Link to="/words-learned">Words Learned</Link></li>
                            <li> <Link to="/cefr-aligned">CFER-Aligned</Link></li>

                        </div>
                    </details>
                    <li> <Link to="/social-chat">Social</Link></li>
                    <br />

                    <li> <Link to="/config">Configuration</Link></li>

                    <details>
                        <summary><img src={arrow_down} alt="" />Interesting Info</summary>
                        <div>
                            <li> <Link to="/methodology">Methodology</Link></li>
                            <li> <Link to="/science-based">Science-based</Link></li>
                        </div>
                    </details>

                    <details className={styles.app_language}>
                        <summary> <img src={arrow_down} alt="" />App Language</summary>
                        <div >
                            <li> <Link to="/real-life-situations"> <img src={sp_flag} alt="" /> Spanish</Link></li>
                            <li> <Link to="/real-life-situations"> <img src={uk_flag} alt="" /> English</Link></li>
                            <li> <Link to="/real-life-situations"> <img src={fr_flag} alt="" /> Francais</Link></li>

                        </div>
                    </details>

                </ul>

            </nav>


        </header>
    )
}

export default Navbar