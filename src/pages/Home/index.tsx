import SubHeader from "../../components/SubHeader";
import Produto from "../../components/Produto";
import styles from "./styles.module.css";
import Categorias from "../../components/Categorias";
import { useEcommerceContext } from "../../contexts/Ecommerce";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const Home = () => {
  const { listaProdutos } = useEcommerceContext();
  const [paginaAtual, setPaginaAtual] = useState(1);

  const itensPorPagina = 6;
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const produtosPaginados = listaProdutos.slice(inicio, fim);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPaginaAtual(page);
    window.scrollTo({
      top: 0, 
      behavior: "smooth",
    });
  };

  return (
    <div>
      <SubHeader page="Home" />
      <section className={styles.body}>
        <div className={styles.category}>
          <Categorias />
        </div>
        <div className={styles.shop}>
          <Produto dados={produtosPaginados} />
        </div>
      </section>
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(listaProdutos.length / 6)}
          shape="rounded"
          page={paginaAtual}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
};

export default Home;
