import styles from './Header.module.css';
import logo from '../assets/logo-todo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logotipo do Todo'/>
    </header>
  )
} 