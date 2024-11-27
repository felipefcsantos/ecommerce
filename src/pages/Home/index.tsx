import { useEffect,useState } from 'react'
import SubHeader from '../../components/SubHeader'
import { buscarProdutos } from '../../api/api-ecomerce'
import Produto from '../../components/Produto'
import Produtos from '../../interfaces/Produtos'

const Home = () => {
  const [produtos, setProdutos] = useState<Produtos[]>([])
  useEffect(() => {
    const fetchProdutos = async() => {
      const response = await buscarProdutos();
      setProdutos(response);
      
    }
    fetchProdutos()
  } ,[])
  return (
    <div>
      <SubHeader page='Home'/>
      <Produto dados={produtos}/>
    </div>
  )
}

export default Home