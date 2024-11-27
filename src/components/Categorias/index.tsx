import { useEcommerceContext } from "../../contexts/Ecommerce";
import Checkbox from '@mui/material/Checkbox';
import styles from "./styles.module.css";

const Categorias = () => {
  const { listaCategorias } = useEcommerceContext();
  return (
    <div className={styles.category}>
      <p className={styles.title}>Categorias</p>
      {listaCategorias.map((item, index) => {
        return (
          <div key={index}>
            <Checkbox name={item}/> {item}
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default Categorias;
