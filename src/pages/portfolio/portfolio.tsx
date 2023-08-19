import styles from "./portfolio.module.css"
import picDeveloper from "../../assets/picDeveloper.jpg"
import Title from "../../components/title/title"


export function Portfolio() {
    return (
        <>
            <section id="projects" className={styles.container}>

                <div className={styles.portfolio}>
                    <Title>Portfólio</Title>

                    <div className={styles.content}>
                        <div className={styles.infoProject} >
                            <img className={styles.picDeveloper} src={picDeveloper} alt="" />
                            <div className={styles.text}>
                                <p className={styles.subtitle}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</p>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}