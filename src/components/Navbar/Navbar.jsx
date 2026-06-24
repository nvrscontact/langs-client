import React, { useState } from 'react'
import fr_flag from '../../assets/icons/fr_flag.svg'
import sp_flag from '../../assets/icons/sp_flag.svg'
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

            <div className={styles.userInfo}>
                <Link to="/user-profile"><img className={styles.pictureProfile} src={profile_one} alt="" />
                </Link>
                <div>
                    <h3>Alonso Nuñez</h3>
                    <p>
                        <span>Software Engineer</span>
                        <span>Currently B2 in <img src={fr_flag} alt="" /> </span>
                    </p>
                </div>
            </div>

            <span
                onClick={() => setIsOpen(!isOpen)}>
                <img className={styles.menuIcon} src={menu} alt="" />
            </span>

            <ul className={`${styles.list} ${isOpen ? styles.open : ""} `} >
                <li> <Link to="/dashboard">Home</Link></li>
                <li> <Link to="/training">Training</Link></li>
                <details>
                    <summary><img src={arrow_down} alt="" /> Progress</summary>
                    <div>
                        <li> <Link to="/real-life-situations">Real-Life Situations</Link></li>
                        <li> <Link to="/words-learned">Words Learned</Link></li>
                        <li> <Link to="/cefr-aligned">CFER-Aligned</Link></li>
                    </div>
                </details>
                <li> <Link to="/social-chat">Social</Link></li>
                <br />

                <details>
                    <summary><img src={arrow_down} alt="" /> More Info</summary>
                    <div>
                        <li> <Link to="/methodology">Methodology</Link></li>
                    </div>
                </details>
                <li> <Link to="/config">Configuration</Link></li>

            </ul>
        </header>
    )
}

export default Navbar