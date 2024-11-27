import { useEcommerceContext } from "../../contexts/Ecommerce";
import Checkbox from "@mui/material/Checkbox";
import styles from "./styles.module.css";
import { useEffect } from "react";

const Categorias = () => {
  const {
    listaCategorias,
    setListaCategorias,
    initialState,
    setListaProdutos,
  } = useEcommerceContext();

  useEffect(() => {
    const categoriasSelecionadas = listaCategorias
      .filter((categoria) => categoria.checked)
      .map((categoria) => categoria.name);

    const listaFiltrada =
      categoriasSelecionadas.length > 0
        ? initialState.filter((item) =>
            categoriasSelecionadas.includes(item.category)
          )
        : initialState;

    setListaProdutos(listaFiltrada);
  }, [listaCategorias, setListaProdutos, initialState]);

  const handleChangeCategorias = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    const novaListaCategorias = listaCategorias.map((categoria) =>
      categoria.name === name ? { ...categoria, checked } : categoria
    );

    setListaCategorias(novaListaCategorias);
  };

  return (
    <div className={styles.category}>
      <p className={styles.title}>Categorias</p>
      {listaCategorias.map((item, index) => {
        return (
          <div key={index}>
            <Checkbox
              name={item.name}
              checked={item.checked}
              onChange={handleChangeCategorias}
            />{" "}
            {item.name}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Categorias;
