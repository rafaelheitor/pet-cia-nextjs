import React from 'react'
import logo from '../assets/img/paw-solid.svg'
import user from '../assets/img/user-alt-solid.svg'
import cart from '../assets/img/shopping-cart-solid.svg'
import logout from '../assets/img/logout.svg'
import { header } from '../types/header'

export default function Header(props: header) {
  return (
    <header>
      <nav className="container">
        <section className="p-header">
          <a href="/">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Pet & Cia</p>
            </div>
          </a>

          <input type="text" placeholder="Pesquise seu Produto" />

          {props.usuario ? (
            <div>
              <h4>Bem vindo, {props.usuario}</h4>
              <img src={logout} />
              <button onClick={props.handleLogout}>Sair</button>
            </div>
          ) : (
            <button className="logo">
              <img src={user} alt="" />
              <a href="/login">Entre ou Registre-se</a>
            </button>
          )}
          <div>
            <a href="/carrinho">
              {props.itens && <h4>{props.itens}</h4>}
              <img src={cart} alt=" Carrinho de Compras" id="carrinho" />
            </a>
          </div>
        </section>

        <section className="s-header">
          <ul>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Contato</li>
            <li>Sobre Nós</li>
            <li>Promoções</li>
          </ul>
        </section>
      </nav>
    </header>
  )
}
