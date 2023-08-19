import Title from "../../components/title/title"
import styles from "./contact.module.css"


export function Contact() {
    return (
        <>
            <section id="contact" className={styles.container}>
                <div className={styles.content}>
                    <Title>Contato</Title>

                </div>
            </section>
        </>
    )
}