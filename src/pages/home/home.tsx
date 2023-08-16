import styles from "./home.module.css"

import ProfilePic from "../../assets/fotoperfil.jpg"

import { Nav } from "../../components/navbar/navbar"
import Title from "../../components/title/title"


import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

export function Home() {


    return (
        <>
            <Nav />

            <section className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <Title className={styles.title}>Desenvolvedor Front-End</Title>
                        <p className={styles.subtitle}>Olá, me chamo Eduardo tenho 18 anos, e sou apaixonado <br />por desenvolvimento front-end.</p>
                        <div className={styles.icons}>
                            <a href="https://github.com/Edufcc" target="_blank"><BsGithub /></a>
                            <a href="https://www.linkedin.com/in/eduardo-freitas-520261268/" target="_blank"><BsLinkedin /></a>
                        </div>
                    </div>
                    <div className={styles.styleImg}>
                        <img className={styles.profilePic} src={ProfilePic} alt="" />
                        <div className={styles.waves}></div>
                    </div>
                </div>
            </section>
        </>
    )
}