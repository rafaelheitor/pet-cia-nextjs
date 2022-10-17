import React from 'react'
import { header } from '../types/header'
import styles from '../styles/components/Header.module.scss'

export default function Header(props: header) {
  return (
    <header>
      <nav className={styles.container}>
        <section className={styles.pHeader}>
          <a href='/'>
            <div className='logo'>
              <img src='/img/paw-solid.svg' alt='' />
              <p>Pet & Cia</p>
            </div>
          </a>

          <input type='text' placeholder='Pesquise seu Produto' />

          {props.usuario ? (
            <div>
              <h4>Bem vindo, {props.usuario}</h4>
              <img src='/img/logout.svg' />
              <button onClick={props.handleLogout}>Sair</button>
            </div>
          ) : (
            <button className={styles.logo}>
              <img src='/img/user-alt-solid.svg' alt='' />
              <a href='/login'>Entre ou Registre-se</a>
            </button>
          )}
          <div>
            <a href='/carrinho'>
              {props.itens && <h4>{props.itens}</h4>}
              <img
                src='/img/shopping-cart-solid.svg'
                alt=' Carrinho de Compras'
                id='carrinho'
              />
            </a>
          </div>
        </section>

        <section className={styles.sHeader}>
          <ul>
            <li className={styles.links}>Produtos</li>
            <li className={styles.links}>Serviços</li>
            <li className={styles.links}>Contato</li>
            <li className={styles.links}>Sobre Nós</li>
            <li className={styles.links}>Promoções</li>
          </ul>
        </section>
      </nav>
    </header>
  )
}
