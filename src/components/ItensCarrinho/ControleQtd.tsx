import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Produtos from "../../interfaces/Produtos";
import { useCarrinhoContext } from "../../contexts/Carrinho";
import styles from "./styles.module.css";

const ControleQtd = ({ item }: { item: Produtos }) => {
  const { addQtd, removeQtd } = useCarrinhoContext();

  return (
    <div className={styles.container_qtd}>
      <div className={styles.item_qtd}>
        <RemoveIcon onClick={() => removeQtd(item.id)} className={styles.btn_qtd} />
        {item.qtd}
        <AddIcon onClick={() => addQtd(item.id)} className={styles.btn_qtd} />
      </div>
    </div>
  );
};

export default ControleQtd;
