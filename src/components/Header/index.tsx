import InputBusca from "./InputBusca";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <header className={styles.header}>
      <div className={styles.container_logo} onClick={() => handleNavigate("/")}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <h2>Ecommerce</h2>
      </div>
      <nav>
        <ul className={styles.container_nav}>
          <li onClick={() => handleNavigate("/")}>Home</li>
          <li onClick={() => handleNavigate("/construcao")}>Categorias</li>
          <li onClick={() => handleNavigate("/construcao")}>Sobre</li>
          <li onClick={() => handleNavigate("/construcao")}>Contato</li>
        </ul>
      </nav>
      <section>
        <InputBusca />
        <div>
          <ShoppingCartOutlinedIcon 
            className={styles.icons} 
            onClick={() => handleNavigate("/carrinho")}
          />
          <AccountCircleOutlinedIcon className={styles.icons}/>
        </div>
      </section>
    </header>
  );
};

export default Header;
