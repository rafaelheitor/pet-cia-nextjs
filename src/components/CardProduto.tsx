import { Produto } from '../types/produto'
import styles from '../styles/components/cardProduto.module.scss'

const CardProduto: React.FC<Produto> = (props) => {
  return (
    <div className={styles.produto}>
      <img src={props.imagem_produto} alt='produto' />
      <h4>{props.nome}</h4>
      <p>R${props.valor},00</p>
      <p>{props.categoria}</p>
      <p>Pet&Cia</p>
      <a href={`/produtos/${props.id}/detalhe`}>
        <button className={styles.btnInfo}>
          <label>Mais informações</label>
        </button>
      </a>
      {/* <button
        className='btn-carrinho'
        onClick={() => props.carrinho(props)}
      >
        <label>Adicionar ao carrinho</label>
      </button> */}
    </div>
  )
}

export default CardProduto
