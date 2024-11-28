import Grid from "@mui/material/Grid2";
import { useCarrinhoContext } from "../../contexts/Carrinho";
import styles from "./styles.module.css";
import ControleQtd from "./ControleQtd";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const ItensCarrinho = () => {
  const { listaCarrinho, removeItemDoCarrinho } = useCarrinhoContext();
  const [openModal, setOpenModal] = useState(false);
  const [itemExcluir, setItemExcluir] = useState(0);

  const handleOpenModal = (id: number) => {
    setItemExcluir(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setItemExcluir(0);
  };

  const handleRemover = () => {
    removeItemDoCarrinho(itemExcluir);
    handleCloseModal();
  };

  return (
    <>
      <div className={styles.container_carrinho}>
        <h3>Seu Carrinho</h3>
        <hr />
        <div className={styles.container_item}>
          {listaCarrinho.map((item) => {
            return (
              <Grid
                container
                spacing={2}
                key={item.id}
                sx={{ marginBottom: "2rem" }}
              >
                <Grid size={3} alignContent="center" textAlign="center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.img}
                  />
                </Grid>
                <Grid size={4}>
                  <p>{item.title}</p>
                </Grid>
                <Grid size={2} alignContent="center" textAlign="end">
                  <p>R$ {item.price}</p>
                </Grid>
                <Grid size={2} alignContent="center" textAlign="end">
                  <ControleQtd item={item} />
                </Grid>
                <Grid size={1} alignContent="center" textAlign="end">
                  <CloseIcon
                    className={styles.btn}
                    onClick={() => handleOpenModal(item.id)}
                  />
                </Grid>
              </Grid>
            );
          })}
        </div>
      </div>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          <h3> Deseja realmente excluir do carrinho o item atual?</h3>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleCloseModal}
            className={styles.btn_action}
          >
            Não
          </Button>
          <Button
            variant="contained"
            onClick={handleRemover}
            className={styles.btn_action}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ItensCarrinho;
