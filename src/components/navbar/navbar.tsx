import styles from "./navbar.module.css"


export function Nav() {
    return (
        <>
            <div>
                <nav>
                    <p className={styles.logo}>Desenvolvedor <br/> Front-end</p>
                    <ul className={styles.navlist}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}