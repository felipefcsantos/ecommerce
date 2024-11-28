import Produtos from "./Produtos";

export default interface CarrinhoContextType {
  listaCarrinho: Produtos[];
  adicionaItemNoCarrinho: (item: Produtos) => void;
  removeItemDoCarrinho: (id: number) => void;
  zerarCarrinho: () => void;
  addQtd: (id: number) => void;
  removeQtd: (id: number) => void;
}
