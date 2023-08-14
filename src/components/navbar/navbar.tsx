import styles from "./navbar.module.css"


export function Nav() {
    return (
        <>
            <div>
                <nav>
                    <p className={styles.logo}>Desenvolvedor <br/> Front-end</p>
                    <ul className={styles.navlist}>
                        <li><a href=""></a>Home</li>
                        <li><a href=""></a>About</li>
                        <li><a href=""></a>Projetos</li>
                        <li><a href=""></a>Contato</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}