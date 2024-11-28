import Checkout from "../../components/Checkout";
import ItensCarrinho from "../../components/ItensCarrinho";
import SubHeader from "../../components/SubHeader";
import styles from "./stles.module.css"

const Carrinho = () => {
  return (
    <div>
      <SubHeader page="Carrinho"  title="Carrinho"/>
      <section className={styles.container}>
        <ItensCarrinho/>
        <Checkout/>
      </section>
    </div>
  );
};

export default Carrinho;
