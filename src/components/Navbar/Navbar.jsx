import React, { useState } from 'react'
import fr_flag from '../../assets/icons/fr_flag.svg'
import sp_flag from '../../assets/icons/sp_flag.svg'

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
                        <span>Currently B2 level in <img src={fr_flag} alt="" /> </span>
                        <span>Registered in 2025</span>
                    </p>
                </div>
            </div>

            <span
                onClick={() => setIsOpen(!isOpen)}>
                <img className={styles.menuIcon} src={menu} alt="" />
            </span>
            
            <div className={styles.listLinks}>
                <ul classNmae={`${styles.ul} ${isOpen ? styles.open : ""} `} >
                    <li> <Link to="/alignment-mcer">Alignment MCER</Link></li>
                    <li> <Link to="/methodology">Methodology</Link></li>
                    <li> <Link to="/progress-chart">Progress</Link></li>
                    <li> <Link to="/dashboard">Home</Link></li>
                    <li> <Link to="/social-chat">Social</Link></li>
                    <li> <Link to="/training">Training</Link></li>
                    <li> <Link to="/config">Config</Link></li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar