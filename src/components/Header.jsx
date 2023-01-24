import styles from'./Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';

export function Header () { // Todo componente deve iniciar com a letra Maiúscula
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    );
}