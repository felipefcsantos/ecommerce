import { useEffect, useState } from "react";
import { useCarrinhoContext } from "../../contexts/Carrinho";
import styles from "./styles.module.css";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { listaCarrinho, zerarCarrinho } = useCarrinhoContext();
  const [total, setTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const total = listaCarrinho.reduce(
      (acumulador, item) => acumulador + item.price * item.qtd,
      0
    );
    setTotal(total);
  }, [listaCarrinho]);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCheckout = () => {
    zerarCarrinho();
    handleClose();
    navigate("/");
  };

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Order Summary</h3>
        <div className={styles.linha}>
          <span className={styles.label}>Subtotal</span>
          <span>R$ {total}</span>
        </div>
        <div className={styles.linha}>
          <span className={styles.label}>Frete</span>
          <span>Gratis</span>
        </div>
        <div className={styles.linha}>
          <span className={styles.label}>Tax</span>
          <span>R$ 3.00</span>
        </div>
        <hr />
        <div className={styles.linha_total}>
          <span>Total</span>
          <span>R$ {total + 3}</span>
        </div>
        <Button
          variant="contained"
          fullWidth
          className={styles.btn_checkout}
          onClick={() => setOpenModal(true)}
        >
          Checkout
        </Button>
        <p className={styles.btn_ancora} onClick={() => navigate("/")}>
          Continue na loja
        </p>
      </div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogContent>
          <h2>Deseja realmente finalizar suas compras?</h2>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            className={styles.btn_actions}
          >
            Não
          </Button>
          <Button
            variant="contained"
            onClick={handleCheckout}
            className={styles.btn_actions}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Checkout;
