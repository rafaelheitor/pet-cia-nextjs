import React from 'react'
import instagramIcon from '../assets/img/instagram-brands (1).svg'
import facebookIcon from '../assets/img/facebook-brands.svg'
import twitterIcon from '../assets/img/twitter-brands.svg'
import dogIcon from '../assets/img/dog-solid.svg'
import catIcon from '../assets/img/cat-solid.svg'
import fishIcon from '../assets/img/fish-solid.svg'

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <div>
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <img src={instagramIcon} alt="Instagram" />
              <a></a>Instagram
            </li>
            <li>
              <img src={facebookIcon} alt="Facebook" />
              <a></a>Facebook
            </li>
            <li>
              <img src={twitterIcon} alt="Twitter" />
              <a></a>Twitter
            </li>
          </ul>
        </div>

        <div className="enderco">
          <h4>Endereço</h4>
          <p>Rua das Creoulas 456 Recife - PE</p>
          <p>Cep: 50000000</p>
        </div>

        <div className="central">
          <h4>Central do Cliente</h4>
          <ul>
            <li>Pedidos</li>
            <li>Cadastro</li>
            <li>Ouvidoria</li>
          </ul>
        </div>

        <div className="departamento">
          <h4>Departamentos</h4>
          <ul>
            <li>
              <img src={dogIcon} alt="Departamento de Cães" />
            </li>
            <li>
              <img src={catIcon} alt="Departamento de Gatos" />
            </li>
            <li>
              <img src={fishIcon} alt="Departamento de Peixes" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
