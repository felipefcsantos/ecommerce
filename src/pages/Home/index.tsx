import SubHeader from "../../components/SubHeader";
import Produto from "../../components/Produto";
import styles from "./styles.module.css";
import Categorias from "../../components/Categorias";
import { useEcommerceContext } from "../../contexts/Ecommerce";

const Home = () => {
  const { listaProdutos } = useEcommerceContext();
  return (
    <div>
      <SubHeader page="Home" />
      <section className={styles.body}>
        <div className={styles.category}>
          <Categorias />
        </div>
        <div className={styles.shop}>
          <Produto dados={listaProdutos} />
        </div>
      </section>
    </div>
  );
};

export default Home;
