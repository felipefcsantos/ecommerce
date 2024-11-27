import SearchIcon from "@mui/icons-material/Search";
import styles from './styles.module.css'

const InputBusca = () => {
  return (
    <div className={styles.container_input}>
        <SearchIcon className={styles.search_icon}/>
      <input placeholder="Procure um produto" type="search" className={styles.input} />
    </div>
  );
};

export default InputBusca;
