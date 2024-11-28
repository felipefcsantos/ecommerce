import { useEcommerceContext } from "../../contexts/Ecommerce";
import Produtos from "../../interfaces/Produtos";
import styles from "./styles.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid2";
import { useCarrinhoContext } from "../../contexts/Carrinho";

const Produto = ({ dados }: { dados: Produtos[] }) => {
  const { favoritarProduto } = useEcommerceContext();
  const {adicionaItemNoCarrinho} = useCarrinhoContext()
  const listaFavoritos = JSON.parse(
    localStorage.getItem("favoritosEcommerce") || "[]"
  );

  const handleVerificaFavorito = (id: number) => {
    const index = listaFavoritos.indexOf(id);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {dados.map((produto) => {
          return (
            <Grid size={4} key={produto.id}>
            <div className={styles.produto}>
              <div className={styles.container_img}>
                <img
                  className={styles.img}
                  src={produto.image}
                  alt={produto.description}
                />
                <div className={styles.overlay}>
                  {handleVerificaFavorito(produto.id) ? (
                    <FavoriteIcon
                      className={styles.favorite}
                      onClick={() => favoritarProduto(produto.id)}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className={styles.favorite}
                      onClick={() => favoritarProduto(produto.id)}
                    />
                  )}
                  <button className={styles.addToCartButton} onClick={() => adicionaItemNoCarrinho(produto)}>
                    Add to cart
                    <AddShoppingCartIcon sx={{ marginLeft: ".5rem" }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className={styles.title}>
                <p>{produto.title}</p>
              </div>
              <div className={styles.container_price}>
                <span>
                  <p>IN STOCK</p>
                </span>
                <p className={styles.price}>R$ {produto.price}</p>
              </div>
            </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Produto;
