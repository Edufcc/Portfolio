import styles from "./about.module.css"

import picDeveloper from "../../assets/picDeveloper.jpg"

import Title from "../../components/title/title"

export function About() {
    return (
        <>
            <section id="about" className={styles.container}>
                <div className={styles.content}>
                    <Title className={styles.title}>Quem sou eu</Title>
                    <div className={styles.about}>
                        <img className={styles.picDeveloper} src={picDeveloper} alt="" />
                        <div className={styles.text}>
                            <p className={styles.subtitle}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}