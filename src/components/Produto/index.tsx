import Produtos from '../../interfaces/Produtos'
import styles from './styles.module.css'

const Produto = ({dados} : {dados: Produtos[]}) => {
  return (
    <div>{dados.map((produto, index) => {
        return(
            <div key={index}>
                <p>{produto.title}</p>
                <p>{produto.description}</p>
                <p>{produto.image}</p>
                <p>{produto.price}</p>
                <p>{produto.category}</p>
                <hr/>
            </div>
        )
    })}</div>
  )
}

export default Produto