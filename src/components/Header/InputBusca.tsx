import SearchIcon from "@mui/icons-material/Search";
import styles from './styles.module.css'
import { useEcommerceContext } from "../../contexts/Ecommerce";

const InputBusca = () => {
  const {pesquisarProdutos} =useEcommerceContext()

  const handlePesquisa = (e: React.ChangeEvent<HTMLInputElement>) => {
    pesquisarProdutos(e.target.value)
  }
  return (
    <div className={styles.container_input}>
        <SearchIcon className={styles.search_icon}/>
      <input placeholder="Procure um produto" type="search" className={styles.input} onChange={handlePesquisa}/>
    </div>
  );
};

export default InputBusca;
