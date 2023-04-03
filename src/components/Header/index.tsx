import styles from './styles.module.scss'
import Image from 'next/image'

import logo from '../../../public/images/logo.svg'
import { ActiveLink } from '../ActiveLink'
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <Image src={logo} alt="Sujeito programador logo" />
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            Home
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            Conteúdos
          </ActiveLink>
          <ActiveLink href="/sobre" activeClassName={styles.active}>
            Sobre
          </ActiveLink>
        </nav>
        <a
          className={styles.readyButton}
          type="button"
          href="https://sujeitoprogramador.com"
        >
          Começar
        </a>
      </div>
    </header>
  )
}
